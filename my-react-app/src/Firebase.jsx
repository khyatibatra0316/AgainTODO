
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKcAVaw0PdS5OqJSsH6AjvZgBZUwn_itQ",
    authDomain: "todo-d2733.firebaseapp.com",
    projectId: "todo-d2733",
    storageBucket: "todo-d2733.firebasestorage.app",
    messagingSenderId: "917452628094",
    appId: "1:917452628094:web:84bcbdf499b3c92cf0f82f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
