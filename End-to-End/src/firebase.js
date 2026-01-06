
// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChynCpOFndE-PwPr6fndUd9JOxUht5Bfs",
  authDomain: "todos-app-react-ab919.firebaseapp.com",
  databaseURL: "https://todos-app-react-ab919-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todos-app-react-ab919",
  storageBucket: "todos-app-react-ab919.firebasestorage.app",
  messagingSenderId: "748690533802",
  appId: "1:748690533802:web:5c804d83cb72e3ba784fd3",
  measurementId: "G-BHM0TB4V3Z"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export { app };

