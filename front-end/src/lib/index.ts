// place files you want to import through the `$lib` alias in this folder.

import type { User } from 'firebase/auth';

// type State = "pending" | "closed"

// type RichiestaConsulenza = {
//     text:string,
//     files: File[],
//     state: State
// }

export interface AppContext {
	isOnline: { value: boolean };
    isLoading: { value: boolean };
	user: { value: User | null };
	error: { value: string };
}
