export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.).*)'],
};

export default function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const decoded = atob(authValue);
    const [user, pwd] = decoded.split(':');

    if (user === 'zhaoshao' && pwd === 'ab19990304') {
      return new Response(null, { status: 200 });
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
