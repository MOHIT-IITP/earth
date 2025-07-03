import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./auth/server";
import { url } from "inspector";

export async function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;

    console.log(pathname);

    const user = await getUser();
    console.log(user);
    if(!user){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher : [
            '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ]
}