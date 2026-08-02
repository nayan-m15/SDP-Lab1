import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const archived = req.nextUrl.searchParams.get("archived");

    const todos = await prisma.todo.findMany({
        where:
            archived === null
                ? {}
                : {
                      archived: archived === "true",
                  },

        orderBy: {
            createdAt: "desc",
        },
    });

    return NextResponse.json(todos);

}

export async function POST(req: Request) {
    const body = await req.json();

    if (!body.title?.trim()) {
        return NextResponse.json(
            { error: "Title is required." },
            { status: 400 }
        );
    }

    if (!body.topic?.trim()) {
        return NextResponse.json(
            { error: "Topic is required." },
            { status: 400 }
        );
    }

    const todo = await prisma.todo.create({
        data: {
            title: body.title,
            description: body.description ?? null,
            dueDate: body.dueDate ? new Date(body.dueDate) : null,
            topic: body.topic,
            category: body.category ?? null,
            status: body.status ?? "To Do",
            archived: false,
        },
    });

    return NextResponse.json(todo, { status: 201 }); 

}
