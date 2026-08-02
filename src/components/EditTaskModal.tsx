"use client";

import TaskForm from "./TaskForm";
import { Todo } from "../types/todo";

interface Props {
    open: boolean;
    todo: Todo | null;
    onClose: () => void;
    onSave: (data: Partial<Todo>) => void;
}

export default function EditTaskModal({
    open,
    todo,
    onClose,
    onSave,
}: Props) {

    if (!open || !todo) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Edit Task</h2>

                <TaskForm
                    initial={todo}
                    onSubmit={onSave}
                />

                <button onClick={onClose}>
                    Close
                </button>

            </div>

        </div>

    );
}