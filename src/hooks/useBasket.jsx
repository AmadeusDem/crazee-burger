import { useState } from "react";

import { deepClone, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleBasketAdd = (idProductToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductInBasket = find(idProductToAdd, basketCopy) !== undefined;

    if (isProductInBasket) {
      const indexProductInBasket = findIndex(idProductToAdd, basketCopy);
      basketCopy[indexProductInBasket].quantity++;
      setBasket(basketCopy);
      return;
    }

    const newProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleBasketDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    const basketCopy = deepClone(basket);
    const newBasket = basketCopy.filter((product) => product.id !== idProductToDelete);
    setBasket(newBasket);
  };

  return { basket, handleBasketAdd, handleBasketDelete };
};
