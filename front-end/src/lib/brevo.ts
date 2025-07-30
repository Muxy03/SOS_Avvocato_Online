import { addDoc, arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import firebase from './firebase';
import type { Email, FILE, Consultation } from '$lib';

export function toBase64Browser(file: File | Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (err) => reject(err);
	});
}

export async function sendTransactionalEmail(email: Email, userUid: string, attachments?: FILE[]) {
	const url = 'https://api.brevo.com/v3/smtp/email';
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'api-key': import.meta.env.VITE_BREVO_API_KEY
	};

	if (attachments) {
		if (attachments.length > 0) {
			for (const file of attachments) {
				email.attachment?.push({
					name: file.name,
					content: (await toBase64Browser(file.file)).split(',')[1]
				});
			}
		}
	}

	const resp = await fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(email)
	});

	if (!resp.ok) {
		const errorBody = await resp.json().catch(() => null);
		throw new Error(`HTTP ${resp.status}: ${JSON.stringify(errorBody)}`);
	}

	const { messageId } = await resp.json();

	const Consultation: Consultation = {
		userID: userUid,
		id: messageId,
		email,
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
		status: 'pending'
	};

	try {
		const Users = (await getDocs(collection(firebase.db, 'Users'))).docs;

		const User = Users.find((dc) => dc.data().id === userUid);

		if (!User) {
			throw new Error('NO USER');
		}

		await updateDoc(doc(firebase.db, 'Users', User.id), {
			Emails: arrayUnion(Consultation)
		});

		const newdoc = await addDoc(collection(firebase.db, 'Consultations'), Consultation);

		console.log('Consultation saved successfully:', newdoc.id);
	} catch (err) {
		console.error('Failed to save email to Firestore:', err);
	}

	return { messageId }; // e.g. { messageId: "..." }
}
