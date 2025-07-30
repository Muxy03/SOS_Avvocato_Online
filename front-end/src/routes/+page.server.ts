import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	if (!cookies.get('user_session')) {
		throw redirect(303, '/register');
	}
};
