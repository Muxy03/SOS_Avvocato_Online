import { doc, getDoc } from 'firebase/firestore';
import type { PageLoad } from './$types';
import firebase from '$lib/firebase';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	return (async () => {
		const user = (await getDoc(doc(firebase.db, `/Users/${params.id}`))).data();

		if (!user) {
			error(404, 'user not found');
		}
		return {
			user
		};
	})();
};
