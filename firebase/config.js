// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzE9q6k-yYR6A4hGVoKfeOTOdfdjYfyRI",
  authDomain: "rn-social-55462.firebaseapp.com",
  projectId: "rn-social-55462",
  storageBucket: "rn-social-55462.appspot.com",
  messagingSenderId: "798328522566",
  appId: "1:798328522566:web:281109568450caa76a4747",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
