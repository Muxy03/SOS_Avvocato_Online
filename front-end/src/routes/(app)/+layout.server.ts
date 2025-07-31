import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const user_session = await fetch('/api/session', {
		method: 'GET',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' }
	});

	if (user_session.status === 200) {
		const user = await user_session.json();
		return { user };
	}

	return {
		user: undefined
	};
};
