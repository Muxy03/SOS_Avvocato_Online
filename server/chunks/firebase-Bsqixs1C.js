import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRcAszA4F_uWVMfOhwCWiS5uievSmVIwI",
  authDomain: "sos-avvocato-online.firebaseapp.com",
  projectId: "sos-avvocato-online",
  storageBucket: "sos-avvocato-online.firebasestorage.app",
  messagingSenderId: "482906291793",
  appId: "1:482906291793:web:1cda2a4f2aa683dec3c270",
  measurementId: "G-ZJMJ99NDTY"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const firebase = {
  app,
  auth,
  db
};

export { firebase as f };
//# sourceMappingURL=firebase-Bsqixs1C.js.map
