// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyB4k0rESK7FOavWsvi3nfFhiIFv0Ks90Hk",
  authDomain: "doctors-portal-632f1.firebaseapp.com",
  projectId: "doctors-portal-632f1",
  storageBucket: "doctors-portal-632f1.appspot.com",
  messagingSenderId: "1048398063436",
  appId: "1:1048398063436:web:570b14244c0e09e87a51e9",
};

/* console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.authDomain);
console.log(firebaseConfig.projectId);
console.log(firebaseConfig.storageBucket);
console.log(firebaseConfig.messagingSenderId);
console.log(firebaseConfig.appId); */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;