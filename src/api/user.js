import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { menuData } from "../data/menu";

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return createUser(userId);
  }
  return existingUser;
};

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
};

export const createUser = async (userId) => {
  const docData = { username: userId, menu: menuData.DEFAULT_MENU };
  await setDoc(doc(db, "users", userId), docData);
  return docData;
};
