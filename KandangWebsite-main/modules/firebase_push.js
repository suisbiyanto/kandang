// Import the functions you need from the SDKs you need

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const database = getDatabase(app);

let blower = document.getElementById("toggle");
let speed = document.getElementById("speed");

blower.addEventListener("click", function toogleInfo(fan) {
  if (blower.checked == true) {
    fan = 1;
  } else {
    fan = 0;
  }
  console.log(fan);
  update(ref(database, 'Node_2/'), {
    Blower_Status: fan,
  });
});

speed.addEventListener("click", function speedInfo(fanspeed) {
  if (speed.checked == true) {
    fanspeed = 1;
  } else {
    fanspeed = 0;
  }
  console.log(speed.checked);
  update(ref(database, 'Node_2/'), {
    Pemanas_Status: fanspeed,
  });

});



