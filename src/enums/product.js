export const EMPTY_PRODUCT = Object.freeze({
  id: "",
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
});

export const PRODUCT_IMAGE_DEFAULT = "/images/coming-soon.png";

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
};

export const IMAGE_NO_STOCK = "/images/stock-epuise.png";
