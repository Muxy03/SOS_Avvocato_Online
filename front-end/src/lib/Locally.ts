// import { serverTimestamp } from 'firebase/firestore';
import { type User } from 'firebase/auth';

export function getInitials(name: string, email: string) {
	if (name && name.trim()) {
		return name
			.trim()
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}
	return email.charAt(0).toUpperCase();
}

export async function storeUserSession(userInfo: User) {
	await fetch('/api/session', {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userInfo)
	});
	// Optionally redirect or update UI after login
}

export async function clearUserSession() {
	await fetch('/api/session', {
		method: 'DELETE',
		credentials: 'same-origin'
	});
	// Optionally redirect or update UI after logout
}

export async function getUserSession() {
	const response = await fetch('/api/session', {
		method: 'GET',
		credentials: 'same-origin'
	});
	if (response.ok) {
		const userSession = await response.json();
		return userSession ? JSON.parse(userSession) : null;
	}
	return null;
}

// export function saveUserDataLocally(userData: User) {
// 	if ('localStorage' in window) {
// 		const userInfo = {
// 			uid: userData.uid,
// 			email: userData.email,
// 			displayName: userData.displayName,
// 			photoURL: userData.photoURL,
// 			lastLogin: serverTimestamp()
// 		};

// 		localStorage.setItem('user_data', JSON.stringify(userInfo));
// 	}
// }

// export function loadUserDataLocally() {
// 	const { user }: AppContext = getContext('App');

// 	if ('localStorage' in window) {
// 		const userData = localStorage.getItem('user_data');
// 		if (userData) {
// 			const userInfo = JSON.parse(userData);
// 			// Directly assign to reactive state
// 			user.value = {
// 				uid: userInfo.uid,
// 				email: userInfo.email,
// 				displayName: userInfo.displayName,
// 				photoURL: userInfo.photoURL
// 			} as User;
// 		}
// 	}
// }

// export function clearUserDataLocally() {
// 	if ('localStorage' in window) {
// 		localStorage.removeItem('user_data');
// 	}
// }
