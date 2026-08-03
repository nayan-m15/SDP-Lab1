"use client";

import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import "./TaskForm.css";

interface Props {
  initial?: Partial<Todo>;
  onSubmit: (data: Partial<Todo>) => Promise<void> | void;
}

export default function TaskForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("To Do");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (!initial) return;

    setTitle(initial.title ?? "");
    setDescription(initial.description ?? "");
    setTopic(initial.topic ?? "");
    setStatus(initial.status ?? "To Do");
    setDueDate(
      initial.dueDate ? initial.dueDate.slice(0, 10) : ""
    );
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit({
      title,
      description,
      topic,
      status,
      dueDate: dueDate || null,
    });

    if (!initial) {
      setTitle("");
      setDescription("");
      setTopic("");
      setStatus("To Do");
      setDueDate("");
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button type="submit">
        {initial ? "Save Changes" : "Create Task"}
      </button>

    </form>
  );
}