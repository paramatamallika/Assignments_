import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const todosRef = collection(db, "todos");

export const getTodos = async () => {
  const snap = await getDocs(todosRef);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const addTodo = (todo) => addDoc(todosRef, todo);

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
