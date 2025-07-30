import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	// if (event.url.pathname === '/' && !event.cookies.get('user_session')) {
	// 	throw redirect(303, '/register');
	// }

	// Protect /app routes
	if (event.url.pathname.startsWith('/home')) {
		if (!event.cookies.get('user_session')) {
			throw redirect(303, '/login');
		}
	}

	// Redirect authenticated users away from auth pages
		if (event.url.pathname === '/login' || event.url.pathname === '/register') {
			if (event.cookies.get('user_session')) {
				throw redirect(303, '/home');
			}
		}

	const response = await resolve(event);
	return response;
}
