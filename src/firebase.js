import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdKN_96vDSn-ymunKwDgYWc8P0lc_irog",
  authDomain: "chreads0925.firebaseapp.com",
  projectId: "chreads0925",
  storageBucket: "chreads0925.appspot.com",
  messagingSenderId: "539845461532",
  appId: "1:539845461532:web:e4287804ac7b2f0fb441d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 우리 프로젝트에 대한 인증 서비스를 사용하겠다라는 의미
export const auth = getAuth(app);

// 우리 프로젝트에 대한 데이터베이스 서비스를 사용하겠다라는 의미
export const db = getFirestore(app);
