import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);

  const handleBasketAdd = (productToAdd) => {
    const copyBasket = deepClone(basket);
    const isProductInBasket =
      copyBasket.find((product) => product.id === productToAdd.id) !== undefined;

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

    console.log(newProduct);

    const newBasket = [newProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const editExistingProduct = (productToEdit, copyBasket, setBasket) => {
    const indexProductInBasket = copyBasket.findIndex((product) => product.id === productToEdit.id);
    copyBasket[indexProductInBasket].quantity++;
    setBasket(copyBasket);
  };

  return { basket, handleBasketAdd };
};
