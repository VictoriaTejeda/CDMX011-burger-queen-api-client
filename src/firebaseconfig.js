import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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


export const logOut =()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      console.log("soy el usuario")
    } else {
      console.log("no hay usuario")
    }
  });
}