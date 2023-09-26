import { useState } from "react";

import { deepClone, findObjectById, findIndexById } from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleBasketAdd = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);

    const isProductInBasket = findObjectById(idProductToAdd, basketCopy) !== undefined;

    if (isProductInBasket) {
      incrementExistingProduct(idProductToAdd, basketCopy, setBasket, username);
      return;
    }

    addNewProduct(idProductToAdd, basketCopy, setBasket, username);
  };

  const handleBasketDelete = (event, idProductToDelete, username) => {
    event.stopPropagation();
    const basketCopy = deepClone(basket);
    const newBasket = basketCopy.filter((product) => product.id !== idProductToDelete);
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  function addNewProduct(idProductToAdd, basketCopy, setBasket, username) {
    const newProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  }

  function incrementExistingProduct(idProductToAdd, basketCopy, setBasket, username) {
    const indexProductInBasket = findIndexById(idProductToAdd, basketCopy);
    basketCopy[indexProductInBasket].quantity++;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  }
  return { basket, setBasket, handleBasketAdd, handleBasketDelete };
};
