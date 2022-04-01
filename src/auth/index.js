import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwVutWC9hvVqWX4OYRmlUNkmh25RxqDh4",
    authDomain: "hummingbird-342703.firebaseapp.com",
    projectId: "hummingbird-342703",
    storageBucket: "hummingbird-342703.appspot.com",
    messagingSenderId: "582717715413",
    appId: "1:582717715413:web:513391a5943260a46c435c",
    measurementId: "G-E55KZZCGMY"
  };

export const app = initializeApp(config);
export const auth = getAuth();