import { useState } from "react";
import { deepClone, findIndexById } from "../utils/array";
import { syncMenu } from "../api/menu";

export const useMenu = (userMenu) => {
  // const DEFAULT_MENU = fakeMenu.LARGE;
  const [menu, setMenu] = useState(userMenu);

  const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu);
    const newMenu = [newProduct, ...menuCopy];
    setMenu(newMenu);
    syncMenu(username, newMenu);
  };

  const handleEdit = (productEdited) => {
    const menuCopy = deepClone(menu);

    const indexToEdit = findIndexById(productEdited.id, menuCopy);

    menuCopy[indexToEdit] = productEdited;

    setMenu(menuCopy);
  };

  const handleDelete = (idToDelete, username) => {
    const menuCopy = deepClone(menu);

    const filteredMenu = menuCopy.filter((product) => product.id !== idToDelete);

    setMenu(filteredMenu);
    syncMenu(username, filteredMenu);
  };

  const handleReset = () => {
    setMenu(DEFAULT_MENU);
  };

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, handleReset };
};
