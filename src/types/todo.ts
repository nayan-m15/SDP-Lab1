export interface Todo {
    id: number;
    title: string;
    description: string | null;
    dueDate: string | null;
    topic: string;
    category: string | null;
    status: string;
    archived: boolean;
    createdAt: string;
    updatedAt: string;
}