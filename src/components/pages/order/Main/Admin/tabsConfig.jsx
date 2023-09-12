import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AdminPanel/AddProductForm";
import EditProductForm from "./AdminPanel/EditProductForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
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
    content: hasAlreadyBeenClicked ? <EditProductForm /> : <HintMessage />,
  },
];

export const getSelectedTab = (tabs, currentSelectedTab) => {
  return tabs.find((tab) => tab.index === currentSelectedTab);
};
