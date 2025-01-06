import { NextRequest } from 'next/server'
import { NextFetchEvent, NextResponse } from 'next/server'

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent,
) {
  const pathname = req.nextUrl.pathname

  const host = req.headers.get('x-forwarded-host') || req.nextUrl.host
  const protocol = req.headers.get('x-forwarded-proto') || 'https'

  const origin = `${protocol}://${host}`
  req.headers.set('seo-url', origin + pathname)
  req.headers.set('seo-origin', origin)

  req.headers.set('seo-pathname', pathname)
  req.headers.set('Content-Language', 'ru')

  const response = NextResponse.next({
    request: req,
  })
  response.headers.set('Content-Language', 'ru')
  return response
}

export const config = {
  matcher: [
    '/((?!api|swagger-api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
