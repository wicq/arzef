import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {geolocation} from '@vercel/functions';
import {NextRequest} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Only apply geolocation logic for the root path
  if (request.nextUrl.pathname === '/') {
    const {country} = geolocation(request);
    
    // If user is from Turkey, redirect to Turkish locale
    if (country === 'TR') {
      const url = request.nextUrl.clone();
      url.pathname = '/tr';
      return Response.redirect(url);
    }
    
    // For all other countries, redirect to English (default)
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return Response.redirect(url);
  }

  // Use the default next-intl middleware for all other routes
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en)/:path*']
}; 