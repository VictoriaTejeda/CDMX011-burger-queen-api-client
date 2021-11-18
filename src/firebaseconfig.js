import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMmW6KVO55jpPGhKjMbGbBfHMmENJ0330",
  authDomain: "burguer-queen-ee7df.firebaseapp.com",
  projectId: "burguer-queen-ee7df",
  storageBucket: "burguer-queen-ee7df.appspot.com",
  messagingSenderId: "530234680144",
  appId: "1:530234680144:web:ce76f4a0dad1d5a8914255",
  measurementId: "G-ZY6HHJE8C5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

export const singIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log('entre');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      console.log('no entre');
    });
}

export const logOut = () => {

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  });
}