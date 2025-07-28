import type { AppContext } from '$lib';
import { redirect } from '@sveltejs/kit';
import { getContext } from 'svelte';

// const { user }: AppContext = getContext('App');

export async function handle({ event, resolve }) {

	if(event.url.pathname === '/' && user.value === null) {
		throw redirect(303, '/login');
	}

	// Protect /app routes
	if (event.url.pathname.startsWith('/home')) {
		console.log(user.value);
        if (user.value === null) {
			throw redirect(303, '/login');
		}
	}

	// Redirect authenticated users away from auth pages
	if (event.url.pathname === '/login' || event.url.pathname === '/register') {
		if (user.value !== null) {
			throw redirect(303, '/home');
		}
	}

	const response = await resolve(event);
	return response;
}