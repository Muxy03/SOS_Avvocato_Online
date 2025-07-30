import type { Consultation } from '$lib';
import { doc, getDoc } from 'firebase/firestore';
import firebase from '$lib/firebase';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	return (async () => {
		// Fetch the consultation document from Firestore
		let cons: Consultation | undefined = undefined;
		cons = (await getDoc(doc(firebase.db, `/Consultations/${params.id}`))).data() as
			| Consultation
			| undefined;

		if (!cons) {
			error(404, 'Consultation not found');
		}
		return {
			consultation: cons as Consultation
		};
	})();
};
