export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Check if request is for dolfsshipping.com
  if (request.headers.get('host')?.includes('dolfsshipping.com')) {
    // Rewrite to dolfsmarine.com while keeping the original host
    const targetUrl = new URL(url.pathname, 'https://www.dolfsmarine.com');
    
    // You can modify headers if needed
    const headers = new Headers(request.headers);
    
    return new Promise((resolve) => {
      fetch(targetUrl, {
        headers,
        method: request.method,
        body: request.body,
        redirect: 'manual'
      }).then(response => {
        const modifiedResponse = new Response(response.body, response);
        // Add any necessary headers
        return resolve(modifiedResponse);
      });
    });
  }
  
  // Continue for other domains
  return NextResponse.next();
}