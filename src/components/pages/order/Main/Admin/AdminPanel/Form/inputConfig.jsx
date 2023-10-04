import { BsCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getInputTextConfig = (newProduct) => [
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

export const getSelectInputConfig = (newProduct) => [
  {
    id: "0",
    name: "isAvailable",
    className: "availability-select",
    Icon: <FiPackage />,
    value: newProduct.isAvailable ? "true" : "false",
    options: [
      { name: "En stock", value: "true" },
      { name: "En rupture", value: "false" },
    ],
  },
  {
    id: "1",
    name: "isAdvertised",
    className: "advertising-select",
    Icon: <GoMegaphone />,
    value: newProduct.isAdvertised ? "true" : "false",
    options: [
      { name: "Sans pub", value: "false" },
      { name: "Avec pub", value: "true" },
    ],
  },
];
