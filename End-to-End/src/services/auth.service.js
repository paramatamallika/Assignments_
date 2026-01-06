// src/services/auth.service.js
import { auth } from "../firebase"; // ✅ Only import auth once
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Login
export const loginUser = async (email, password) => {
  if (!email || !password) throw new Error("Email and password required");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    throw error;
  }
};

// Signup
export const signupUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Signup error:", error.code, error.message);
    throw error;
  }
};

// Logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error.code, error.message);
    throw error;
  }
};
