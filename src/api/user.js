import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { menuData } from "../data/menu";

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    createUser(userId);
  }
};

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
};

export const createUser = (userId) => {
  const docData = { username: userId, menu: menuData.DEFAULT_MENU };
  setDoc(doc(db, "users", userId), docData);
};
