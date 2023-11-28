// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkXvLxbF4zcOLGNftbdS72B_B2id2aCDA",
  authDomain: "kandangapp-bed0f.firebaseapp.com",
  databaseURL: "https://kandangapp-bed0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kandangapp-bed0f",
  storageBucket: "kandangapp-bed0f.appspot.com",
  messagingSenderId: "541128060379",
  appId: "1:541128060379:web:b970e6cd11988630244bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        name: name,
        nohp: nohp,
        email: emailSignup,
        password: passwordSignup,
      });
    })
    .then(() => {
      alert("User Telah Ditambahkan,Silahkan Sign In");
      location.href = "./index.html";
    })
    .catch((error) => {
      alert(error);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      alert("Berhasil Login!");
      const user = userCredential.user;
      location.href = "./dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
});
