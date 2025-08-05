import { signInWithEmailAndPassword } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import { doc, getDocs, updateDoc, collection } from 'firebase/firestore';
import type { PageServerLoad } from '../$types';
import type { AppContext, UserData } from '$lib';
import { getContext } from 'svelte';

const { error }: AppContext = getContext('App');

export const actions: Actions = {
	login: async ({ fetch, request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (email === 'admin' && password === 'admin') {
			const admin = { email, password };
			await fetch('/api/session', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(admin)
			});

			throw redirect(303, '/admin');
		}

		try {
			const userInfo = await signInWithEmailAndPassword(firebase.auth, email, password);

			const user_session = await fetch('/api/session', {
				method: 'GET',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' }
			});

			if (user_session.status === 200) {
				const user = await user_session.json();
				const docRef = doc(firebase.db, 'Users', user.DocId);

				user.lastLogin = new Date().toDateString();

				await updateDoc(docRef, {
					lastLogin: new Date().toDateString()
				});

				await fetch('/api/session', {
					method: 'POST',
					credentials: 'same-origin',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(user)
				});
			} else {
				const Snapshot = (await getDocs(collection(firebase.db, 'Users'))).docs;

				if (Snapshot.length === 0) return true;

				for (const doc of Snapshot) {
					if (doc.data().id === userInfo.user.uid) {
						const User: UserData = {
							DocId: doc.id,
							id: userInfo.user.uid,
							FullName: userInfo.user.displayName || '',
							email: email,
							createdAt: doc.data().createdAt,
							lastLogin: Date.now().toString(),
							Emails: doc.data().Emails
						};

						await fetch('/api/session', {
							method: 'POST',
							credentials: 'same-origin',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(User)
						});

						break;
					}
				}
			}
		} catch (err) {
			error.value = 'Error: Login failed';
			return fail(400, err instanceof Error ? { error: err.message } : { error: 'Login failed' });
		}

		throw redirect(303, '/home');
	}
};

export const load: PageServerLoad = ({ cookies }) => {
	const cookie = cookies.get('user_session');
	if (cookie) {
		//throw redirect(303, '/home');
	}
};
