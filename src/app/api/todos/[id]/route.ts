import { prisma } from "../../../../../lib/prisma";
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
  try {
    const { id } = await params;
    const body = await req.json();

    const data: Record<string, unknown> = {};

    if (body.title !== undefined) {
      data.title = body.title;
    }

    if (body.description !== undefined) {
      data.description = body.description;
    }

    if (body.topic !== undefined) {
      data.topic = body.topic;
    }

    if (body.category !== undefined) {
      data.category = body.category;
    }

    if (body.status !== undefined) {
      data.status = body.status;
    }

    if (body.dueDate !== undefined) {
      data.dueDate = body.dueDate
        ? new Date(body.dueDate)
        : null;
    }

    const todo = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to update task.",
      },
      {
        status: 500,
      }
    );
  }
}