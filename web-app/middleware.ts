import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./auth/server";

export async function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;

    console.log(pathname);

    const user = await getUser();

    const PUBLIC_PATH = ['/login', '/signup'];

    const isPublicPath = PUBLIC_PATH.some((path) => {
        return pathname.startsWith(path);
    })


    console.log(user);

    if(!user && !isPublicPath){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher : [
            '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ]
}