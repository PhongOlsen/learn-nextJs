import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // if (request.page.name === '/about') {
    //     request.nextUrl.pathname = '/login'
    //     return NextResponse.rewrite(request.nextUrl)
    // }
    request.nextUrl.pathname = '/about'
    return NextResponse.next();
}