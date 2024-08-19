// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Xv0DvE9jtaEn1mObZGuagkmI64ANqEg",
  authDomain: "programacao-movel-manha.firebaseapp.com",
  projectId: "programacao-movel-manha",
  storageBucket: "programacao-movel-manha.appspot.com",
  messagingSenderId: "767268857540",
  appId: "1:767268857540:web:ee8a7c28e9cbe830a1cb91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };