import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./auth/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const user = await getUser();

    const PUBLIC_PATH = ['/login', '/signup'];

    const isPublicPath = PUBLIC_PATH.some((path) => pathname.startsWith(path));

    // If user is present and trying to access /login or /signup, redirect to home
    if (user && isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If user is not present and trying to access a protected route, redirect to /login
    if (!user && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ]
}