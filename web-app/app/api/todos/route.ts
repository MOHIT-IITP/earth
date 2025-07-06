import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server"


// function to create todo in db
export async function POST(request: Request){
    const body = await request.json()
    const {title, description, completed, priority, dueDate, authorId, noteId} = body

    // creating new todo in database
    try {
        const todo = await prisma.todo.create({
            data: {
                title, 
                description,
                completed,
                priority,
                dueDate: dueDate ? new Date(dueDate) : undefined,
                authorId, 
                noteId,
            },
        })

        return NextResponse.json(todo);

    } catch (error) {
        return new NextResponse("Error creating todo", {status: 500});
    }
}

// function to delete todo in db
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return new NextResponse("Todo ID is required", { status: 400 });
    }

    try {
        const deletedTodo = await prisma.todo.delete({
            where: {
                id: id
            }
        });

        return NextResponse.json(deletedTodo);
    } catch (error) {
        return new NextResponse("Error deleting todo", { status: 500 });
    }
}

