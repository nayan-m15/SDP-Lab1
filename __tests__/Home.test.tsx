import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, it, expect } from "vitest";
import Home from "../src/app/page";

const mockAddTodo = vi.fn();
const mockEditTodo = vi.fn();
const mockArchive = vi.fn();

let mockTodos = [
  {
    id: 1,
    title: "Buy milk",
    description: "",
    topic: "Personal",
    status: "To Do",
    archived: false,
    dueDate: null,
  },
  {
    id: 2,
    title: "Study React",
    description: "",
    topic: "University",
    status: "In Progress",
    archived: false,
    dueDate: null,
  },
  {
    id: 3,
    title: "Archived Task",
    description: "",
    topic: "Work",
    status: "Completed",
    archived: true,
    dueDate: null,
  },
];

vi.mock("@/hooks/useTodos", () => ({
  useTodos: () => ({
    todos: mockTodos,
    loading: false,
    addTodo: mockAddTodo,
    editTodo: mockEditTodo,
    archive: mockArchive,
  }),
}));

describe("TaskFlow UI Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /*Create Todo Test*/

  it("opens the task form, submits a new task and clears the form", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: /\+ new task/i,
      })
    );

    const title = screen.getByPlaceholderText(/task title/i);

    await user.type(title, "Finish assignment");

    await user.type(
      screen.getByPlaceholderText(/topic/i),
      "University"
    );

    await user.click(
      screen.getByRole("button", {
        name: /create task/i,
      })
    );

    expect(mockAddTodo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Finish assignment",
        topic: "University",
      })
    );

    expect(mockAddTodo).toHaveBeenCalledTimes(1);

    expect(
    screen.queryByPlaceholderText(/task title/i)
    ).not.toBeInTheDocument();
  });

  /*Archive Test*/

  it("filters active, archived and all tasks correctly", async () => {
    const user = userEvent.setup();

    render(<Home />);

    // Default = Active

    expect(
      screen.getByText("Buy milk")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Study React")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Archived Task")
    ).not.toBeInTheDocument();

    //Archived

    await user.click(
      screen.getByRole("button", {
        name: /archived/i,
      })
    );

    expect(
      screen.getByText("Archived Task")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Buy milk")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Study React")
    ).not.toBeInTheDocument();

    // All

    await user.click(
      screen.getByRole("button", {
        name: /^all$/i,
      })
    );

    expect(
      screen.getByText("Buy milk")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Study React")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Archived Task")
    ).toBeInTheDocument();
  });

  /*Search Test*/

  it("filters tasks using the search box", async () => {
    const user = userEvent.setup();

    render(<Home />);

    const search = screen.getByPlaceholderText(
      /search tasks/i
    );

    await user.type(search, "React");

    expect(
      screen.getByText("Study React")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Buy milk")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Archived Task")
    ).not.toBeInTheDocument();
  });
});