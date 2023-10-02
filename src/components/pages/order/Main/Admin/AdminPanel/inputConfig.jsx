import { BsCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getInputConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    className: "name-input",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    className: "image-input",
    Icon: <BsCameraFill />,
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: newProduct.imageSource,
    version: "minimalist",
    type: "url",
  },
  {
    id: "2",
    name: "price",
    className: "price-input",
    Icon: <MdOutlineEuro />,
    placeholder: "Prix",
    value: newProduct.price ? newProduct.price : "",
    version: "minimalist",
  },
];
