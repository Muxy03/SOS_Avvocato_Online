import firebase from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { PageServerLoad } from '../../$types';
import type { AppContext, Consultation } from '$lib';
import { getContext } from 'svelte';

// const { error }: AppContext = getContext('App');

export const load: PageServerLoad = async () => {
	try {
		const consultationsRef = collection(firebase.db, 'Consultations');
		const querySnapshot = await getDocs(consultationsRef);

		if (!querySnapshot.empty) {
			const consultations = querySnapshot.docs.map((doc) => {
				console.log('Consultations fetched successfully:', doc.data(), doc.id);
				return {
					id: doc.id,
					createdAt: doc.data().createdAt,
					updatedAt: doc.data().updatedAt,
					email: doc.data().email,
					status: doc.data().status,
					userID: doc.data().userID
				} as Consultation;
			});

			return {
				consultations: consultations as Consultation[],
				'error': null
			};
		}

		return {
			consultations: [] as Consultation[],
			'error': 'No consultations found'
		};
	} catch (err) {
		//error.value = 'Error fetching consultations:' + err;
		console.error('Error fetching consultations:', err);
		return {
			consultations: [] as Consultation[],
			'error': 'Failed to fetch consultations'
		};
	}
};
