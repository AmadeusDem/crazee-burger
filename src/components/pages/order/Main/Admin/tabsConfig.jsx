import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AdminPanel/admin-forms/AddProductForm.jsx";
import EditProductForm from "./AdminPanel/admin-forms/EditProductForm.jsx";
import HintMessage from "./AdminPanel/admin-forms/HintMessage.jsx";

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
