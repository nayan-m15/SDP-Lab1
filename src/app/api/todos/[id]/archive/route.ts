import { prisma } from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function PATCH(
    req: Request,
    { params }: RouteContext
) {
    const { id } = await params;

    const todo = await prisma.todo.update({
        where: {
            id: Number(id),
        },

        data: {
            archived: true,
        },
    });

    return NextResponse.json(todo);
}