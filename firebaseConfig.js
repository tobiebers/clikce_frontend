import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Ihre Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyB2QsT6aGhKeifKBI-QZFaNdyhRYgYNqlc",
  authDomain: "clikce-38039.firebaseapp.com",
  projectId: "clikce-38039",
  storageBucket: "clikce-38039.appspot.com",
  messagingSenderId: "146847549922",
  appId: "1:146847549922:web:14bce086397e4f178c11bb",
  measurementId: "G-0W05YPL0NG"
};

// Initialisieren Sie Firebase
const app = initializeApp(firebaseConfig);

// Authentifizierungsdienst und Google Auth Provider initialisieren
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
