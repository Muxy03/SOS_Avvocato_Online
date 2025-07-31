import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	const cookie = cookies.get('user_session');
	if (!cookie) {
		throw redirect(303, '/register');
	} else {
		return JSON.parse(cookie);
	}
};
