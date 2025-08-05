// place files you want to import through the `$lib` alias in this folder.


// type State = "pending" | "closed"

// type RichiestaConsulenza = {
//     text:string,
//     files: File[],
//     state: State
// }

export type UserData = {
	DocId: string;
	id: string;
	FullName: string;
	email: string;
	createdAt: string;
	lastLogin: string;
	Emails: Consultation[];
};

export type UserAdmin = {
	email: 'admin';
	password: 'admin';
};

export type Attachment = {
	name: string;
	content: string;
};

export type Email = {
	sender: { email: string; name: string };
	to: { email: string; name: string }[];
	subject: string;
	htmlContent: string;
	textContent: string;
	attachment?: Attachment[];
};

export type Consultation = {
	id: string;
	userID: string;
	email: Email;
	createdAt: string;
	updatedAt: string;
	status: 'pending' | 'completed' | 'in-progress' | 'cancelled';
};

export type FILE = {
	id: number;
	file: File;
	name: string;
	size: number;
	type: string;
};
