type Attachment = {
	name: string;
	content: string;
};

export type Email = {
	sender: { email: string; name: string };
	to: { email: string; name: string }[];
	subject: string;
	htmlContent: string;
	textContent: string;
	attachment: Attachment[];
};

export type FILE = {
	id: number;
	file: File;
	name: string;
	size: number;
	type: string;
};

export function toBase64Browser(file: File | Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (err) => reject(err);
	});
}

export async function sendTransactionalEmail(email: Email, attachments: FILE[]) {
	const url = 'https://api.brevo.com/v3/smtp/email';
	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'api-key': import.meta.env.VITE_BREVO_API_KEY
	};

	for (const file of attachments) {
		email.attachment.push({
			name: file.name,
			content: (await toBase64Browser(file.file)).split(',')[1]
		});
	}

	console.log(email)

	const resp = await fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(email)
	});

	if (!resp.ok) {
		const errorBody = await resp.json().catch(() => null);
		throw new Error(`HTTP ${resp.status}: ${JSON.stringify(errorBody)}`);
	}

	return resp.json(); // e.g. { messageId: "..." }
}
