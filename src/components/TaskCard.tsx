"use client";

import { Todo } from "../types/todo";

interface Props {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onArchive: (id: number) => void;
}

export default function TaskCard({
    todo,
    onEdit,
    onArchive,
}: Props) {

    function statusColor(status: string) {
        switch (status) {
            case "Completed":
                return "status-completed";

            case "In Progress":
                return "status-progress";

            default:
                return "status-todo";
        }
    }

    return (
        <article className="task-card">

            <div className="task-header">

                <div>

                    <h3 className="task-title">
                        {todo.title}
                    </h3>

                    <p className="task-meta">
                        Description:
                        <span>{todo.description}</span>
                    </p>

                    <p className="task-meta">
                        Topic:
                        <span>{todo.topic}</span>
                    </p>

                    {todo.dueDate && (

                        <p className="task-meta">

                            Due:
                            <span>
                                {new Date(todo.dueDate).toLocaleDateString()}
                            </span>

                        </p>

                    )}

                </div>

                <span
                    className={`status-badge ${statusColor(todo.status)}`}
                >
                    {todo.status}
                </span>

            </div>

            <div className="task-actions">

                <button
                    onClick={() => onEdit(todo)}
                    className="edit-btn"
                >
                    Edit
                </button>

                {!todo.archived && (

                    <button
                        onClick={() => onArchive(todo.id)}
                        className="archive-btn"
                    >
                        Archive
                    </button>

                )}

            </div>

        </article>
    );
}