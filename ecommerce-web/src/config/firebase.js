import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBlHz7lu1cfKisH4DahKB9of1lnONfYpHI",
    authDomain: "greenleaf-market.firebaseapp.com",
    projectId: "greenleaf-market",
    storageBucket: "greenleaf-market.appspot.com",
    messagingSenderId: "704056511228",
    appId: "1:704056511228:web:66d09caa65808986a62579",
    measurementId: "G-0H1H2ZGYY1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;