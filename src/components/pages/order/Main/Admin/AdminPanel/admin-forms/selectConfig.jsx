import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getSelectConfig = (newProduct) => [
  {
    id: "0",
    name: "isAvailable",
    className: "availability-select",
    Icon: <FiPackage />,
    options: [
      { name: "En stock", value: "true", selected: newProduct.isAvailable },
      { name: "En rupture", value: "false", selected: !newProduct.isAvailable },
    ],
  },
  {
    id: "1",
    name: "isAdvertised",
    className: "advertising-select",
    Icon: <GoMegaphone />,
    options: [
      { name: "Sans pub", value: "false", selected: !newProduct.isAdvertised },
      { name: "Avec pub", value: "true", selected: newProduct.isAdvertised },
    ],
  },
];
