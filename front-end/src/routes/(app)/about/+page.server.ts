import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// import { collection, getDocs } from 'firebase/firestore';
// import firebase from '$lib/firebase';

export const load: PageServerLoad = async ({ cookies }) => {
	const cookie = cookies.get('user_session');
	if (cookie) {
		const user = JSON.parse(cookie);
		console.log('about',user)
		throw redirect(303, '/about/' + user.DocId);
	} else {
		throw redirect(307, '/register');
	}
};
