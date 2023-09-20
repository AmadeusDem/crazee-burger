import { createContext } from "react";

export const AdminContext = createContext({
  isPanelOpen: true,
  setIsPanelOpen: () => {},

  selectedTab: "",
  setSelectedTab: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
  handleEdit: () => {},

  newProduct: [],
  setNewProduct: () => {},

  onCardClick: () => {},
  productToEdit: {},
  setProductToEdit: () => {},
  titleEditRef: () => {},

  handleBasketAdd: () => {},
  handleBasketDelete: () => {},
});
