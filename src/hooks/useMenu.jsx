import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndexById } from "../utils/array";

export const useMenu = () => {
  const DEFAULT_MENU = fakeMenu.LARGE;
  const [menu, setMenu] = useState(DEFAULT_MENU);

  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    setMenu([newProduct, ...menuCopy]);
  };

  const handleEdit = (productEdited) => {
    const menuCopy = deepClone(menu);

    const indexToEdit = findIndexById(productEdited.id, menuCopy);

    menuCopy[indexToEdit] = productEdited;

    setMenu(menuCopy);
  };

  const handleDelete = (idToDelete) => {
    const menuCopy = deepClone(menu);

    const filteredMenu = menuCopy.filter((product) => product.id !== idToDelete);

    setMenu(filteredMenu);
  };

  const handleReset = () => {
    setMenu(DEFAULT_MENU);
  };

  return { menu, handleAdd, handleEdit, handleDelete, handleReset };
};
