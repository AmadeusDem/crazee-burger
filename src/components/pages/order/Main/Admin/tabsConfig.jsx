import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AdminPanel/AddProductForm";

export const tabs = [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    content: <AddProductForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    content: "Modifier un produit",
  },
];

export const getSelectedTab = (tabs, currentSelectedTab) => {
  return tabs.find((tab) => tab.index === currentSelectedTab);
};
