import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncMenu = (userId, updatedMenu) => {
  const docData = {
    username: userId,
    menu: updatedMenu,
  };
  setDoc(doc(db, "users", userId), docData);
};
