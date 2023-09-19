import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleBasketAdd = (productToAdd) => {
    const copyBasket = deepClone(basket);
    const isProductInBasket = find(productToAdd.id, copyBasket) !== undefined;

    if (isProductInBasket) {
      editExistingProduct(productToAdd, copyBasket, setBasket);
    } else {
      createNewProduct(productToAdd, copyBasket, setBasket);
    }
  };

  const createNewProduct = (productToAdd, basketCopy, setBasket) => {
    const newProduct = {
      ...productToAdd,
      quantity: 1,
    };

    const newBasket = [newProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const editExistingProduct = (productToEdit, copyBasket, setBasket) => {
    const indexProductInBasket = findIndex(productToEdit.id, copyBasket);
    copyBasket[indexProductInBasket].quantity++;
    setBasket(copyBasket);
  };

  const handleBasketDelete = (idProductToDelete) => {
    const basketCopy = deepClone(basket);
    const newBasket = basketCopy.filter((product) => product.id !== idProductToDelete);
    setBasket(newBasket);
  };

  return { basket, handleBasketAdd, handleBasketDelete };
};
