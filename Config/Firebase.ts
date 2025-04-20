import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcoFa9D13tFyp9z8pZ8XnC0XblwZUlBXA",
  authDomain: "self-help-app-7e483.firebaseapp.com",
  projectId: "self-help-app-7e483",
  storageBucket: "self-help-app-7e483.firebasestorage.app",
  messagingSenderId: "218208845214",
  appId: "1:218208845214:web:c137bfda39d06344276a8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);