"use client";

import { useState } from "react";
import { Todo } from "../types/todo";
import "./TaskForm.css"; 

interface Props {
    initial?: Partial<Todo>;
    onSubmit: (data: Partial<Todo>) => void;
}

export default function TaskForm({
    initial,
    onSubmit,
}: Props) {

    const [title, setTitle] = useState(initial?.title ?? "");
    const [description, setDescription] = useState(initial?.description ?? "");
    const [topic, setTopic] = useState(initial?.topic ?? "");
    const [status, setStatus] = useState(initial?.status ?? "To Do");

    const [dueDate, setDueDate] = useState(
        initial?.dueDate
            ? initial.dueDate.slice(0, 10)
            : ""
    );

    return (

        <form className="task-form"
            onSubmit={(e) => {
                e.preventDefault();

                onSubmit({
                    title,
                    description,
                    topic,
                    status,
                    dueDate,
                });
            }}
        >

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
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
                onChange={(e) =>
                    setDueDate(e.target.value)
                }
            />

            <select
                value={status}
                onChange={(e) =>
                    setStatus(e.target.value)
                }
            >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <button type="submit">
                Save Task
            </button>

        </form>

    );
}