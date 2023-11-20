import { ROUTES } from '@/constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import cookie from 'cookie';

const { LOGIN, REGISTER, DASHBOARD } = ROUTES;

export function middleware(request: NextRequest) {
  const cookies = cookie.parse(request.headers.get('Cookie') || '');
  const authToken = cookies?.['auth_token'];
  const pathname = request.nextUrl.pathname;

  if (authToken) {
    // User is authenticated
    if (pathname === LOGIN || pathname === REGISTER) {
      // If they try to access login/register, redirect to dashboard
      return NextResponse.redirect(new URL(DASHBOARD, request.url));
    } else {
      // else allow the request to continue
      return NextResponse.next();
    }
  } else {
    // User is not authenticated
    if (pathname !== LOGIN && pathname !== REGISTER) {
      // If they try to access any other page, redirect to login
      return NextResponse.redirect(new URL(LOGIN, request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
