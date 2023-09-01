import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const tabs = [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: AiOutlinePlus,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: MdModeEditOutline,
  },
];

export const getSelectedTab = (tabs, currentSelectedTab) => {
  return tabs.find((tab) => tab.index === currentSelectedTab);
};
