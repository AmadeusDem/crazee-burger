import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getSelectConfig = (newProduct) => [
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
