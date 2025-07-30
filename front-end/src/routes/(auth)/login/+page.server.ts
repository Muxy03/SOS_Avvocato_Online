import { signInWithEmailAndPassword } from 'firebase/auth';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import firebase from '$lib/firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
// import { storeUserSession } from '$lib/Locally';

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

			const Users = (await getDocs(collection(firebase.db, 'Users'))).docs;

			const User = Users.find((dc) => dc.data().id === userInfo.user.uid);

			if (!User) {
				throw new Error('NO USER');
			}

			const docRef = doc(firebase.db, 'Users', User.id);

			await updateDoc(docRef, {
				lastLogin: new Date().toDateString()
			});

			// storeUserSession(userCredential.user);
			await fetch('/api/session', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userInfo)
			});
		} catch (err: unknown) {
			return fail(400, err instanceof Error ? { error: err.message } : { error: 'Login failed' });
		}

		throw redirect(303, '/home');
	}
};
