import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNt1QsYQUtpi_WrBBWEHAvUzweHK2D-ow",
  authDomain: "figyorcms.firebaseapp.com",
  databaseURL: "https://figyorcms-default-rtdb.firebaseio.com",
  projectId: "figyorcms",
  storageBucket: "figyorcms.appspot.com",
  messagingSenderId: "965749320688",
  appId: "1:965749320688:web:73f4b6450b514862788b35"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
