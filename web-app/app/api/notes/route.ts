import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const user = await getUser();

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { title, content } = body;

        if (!title) {
            return new NextResponse("Title is required", { status: 400 });
        }

        const note = await prisma.note.create({
            data: {
                title,
                content,
                authorId: user.id,
            }
        });

        return NextResponse.json(note);
    } catch (error) {
        return new NextResponse("ERROR CREATING NEW NOTE", { status: 500 });
    }
}