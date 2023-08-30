import { createContext } from "react";

export const AdminContext = createContext({
  isPanelOpen: true,
  setIsPanelOpen: () => {},
});
