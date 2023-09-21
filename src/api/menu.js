import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncMenu = (userId, updatedMenu) => {
  const docData = {
    username: userId,
    menu: updatedMenu,
  };
  setDoc(doc(db, "users", userId), docData);
};

export const getMenu = async (userId) => {
  const docSnapshot = await getDoc(doc(db, "users", userId));
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
};
