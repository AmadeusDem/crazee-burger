import { createContext } from "react";

export const OrderContext = createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  username: "",
});
