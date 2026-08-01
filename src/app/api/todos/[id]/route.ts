import { prisma } from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{id: string}>}) {
    
    const {id} = await params; 

    const body = await req.json(); 

    const todo = await prisma.todo.update({
        where: {
            id: Number(id), 
        },
        data: body,  
    }); 

    return NextResponse.json(todo); 

}