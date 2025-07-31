import { doc, getDoc } from 'firebase/firestore';
import type { PageLoad } from './$types';
import firebase from '$lib/firebase';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ fetch, params }) => {
	return (async () => {
		const user = (await getDoc(doc(firebase.db, `/Users/${params.id}`))).data();

		if (!user) {
			await fetch('/api/session', {
				method: 'DELETE',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: ''
			});

			throw redirect(307, '/register');
		}

		return {
			user
		};
	})();
};
