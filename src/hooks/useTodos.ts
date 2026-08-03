"use client";

import { useEffect, useState } from "react";

import { Todo } from "../types/todo";

import {

    getTodos,

    createTodo,

    updateTodo,

    archiveTodo,

} from "../services/todoApi";

export function useTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const [loading, setLoading] = useState(true);

    async function loadTodos(archived?: boolean) {

        setLoading(true);

        try {

            const data = await getTodos(archived);

            setTodos(data);

        } finally {

            setLoading(false);

        }

    }

    async function addTodo(todo: Partial<Todo>) {

        await createTodo(todo);

        await loadTodos(false);

    }

    async function editTodo(
        id: number,
        todo: Partial<Todo>
    ) {

        await updateTodo(id, todo);

        await loadTodos(false);

    }

    async function archive(id: number) {

        await archiveTodo(id);

        await loadTodos(false);

    }

    useEffect(() => {

        loadTodos();

    }, []);

    return {

        todos,

        loading,

        loadTodos,

        addTodo,

        editTodo,

        archive,

    };
}