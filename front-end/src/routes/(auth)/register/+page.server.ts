import { createUserWithEmailAndPassword } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import { fail } from '@sveltejs/kit';
import { addDoc, collection } from 'firebase/firestore';

export const actions: Actions = {
	register: async ({ fetch, request }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		try {
			const User = (await createUserWithEmailAndPassword(firebase.auth, email, password)).user;

			await fetch('/api/session', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(User)
			});

			await addDoc(collection(firebase.db, 'Users'), {
				id: User.uid,
				FullName: fullName,
				email: User.email,
				createdAt: Date.now().toString(),
				lastLogin: Date.now().toString(),
				Emails: []
			});
		} catch (err: unknown) {
			console.error('Registration error:', err);
			return fail(400, {
				error: JSON.stringify(err)
			});
		}
	}
};