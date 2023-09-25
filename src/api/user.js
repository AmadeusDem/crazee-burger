import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

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
  const docData = { username: userId, menu: fakeMenu.LARGE };
  setDoc(doc(db, "users", userId), docData);
};
