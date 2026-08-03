import { Todo } from "../types/todo";

const BASE_URL = "/api/todos";

export async function getTodos(
    archived?: boolean
): Promise<Todo[]> {

    let url = BASE_URL;

    if (archived !== undefined) {
        url += `?archived=${archived}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to load todos");
    }

    return res.json();
}

export async function createTodo(todo: Partial<Todo>) {
    const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!res.ok) {
        throw new Error("Failed to create todo");
    }

    return res.json();
}

export async function updateTodo(
    id: number,
    todo: Partial<Todo>
): Promise<Todo> {

    const res = await fetch(`${BASE_URL}/${id}`, {

        method: "PATCH",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(todo),
    });

    if (!res.ok) {
        throw new Error("Failed to update todo");
    }

    return res.json();
}

export async function archiveTodo(
    id: number
): Promise<Todo> {

    const res = await fetch(`${BASE_URL}/${id}/archive`, {

        method: "PATCH",
    });

    if (!res.ok) {
        throw new Error("Failed to archive todo");
    }

    return res.json();
}