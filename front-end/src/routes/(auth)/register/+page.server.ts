import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import { fail, redirect } from '@sveltejs/kit';
import { addDoc, collection } from 'firebase/firestore';
import type { UserData } from '$lib';
import type { PageServerLoad } from '../$types';

// async function check(uid: string){
// 	const Snapshot = (await getDocs(collection(firebase.db, 'Users'))).docs;

// 	if(Snapshot.length === 0) return true;

// 	for(const doc of Snapshot){
// 		if(doc.data().id === uid) return false;
// 	}

// 	return true;
// }

export const actions: Actions = {
	register: async ({ fetch, request }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		try {
			const user = (await createUserWithEmailAndPassword(firebase.auth, email, password)).user;

			await updateProfile(user, {
				displayName: fullName
			});

			// if(!await check(user.uid)){
			// 	throw new Error('Email already used for another account')
			// }

			const DocRef = await addDoc(collection(firebase.db, 'Users'), {
				id: user.uid,
				FullName: fullName,
				email: user.email,
				createdAt: Date.now().toString(),
				lastLogin: Date.now().toString(),
				Emails: []
			});

			const User: UserData = {
				DocId: DocRef.id,
				id: user.uid,
				FullName: fullName,
				email: email,
				createdAt: Date.now().toString(),
				lastLogin: Date.now().toString(),
				Emails: []
			};

			await fetch('/api/session', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(User)
			});
		} catch (err: unknown) {
			console.error('Registration error:', err);

			await fetch('/api/session', {
				method: 'DELETE',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: ''
			});

			return fail(400, {
				error: JSON.stringify(err)
			});
		}
	}
};

export const load: PageServerLoad = ({ cookies }) => {
	if (cookies.get('user_session')) {
		throw redirect(303, '/home');
	}
};
