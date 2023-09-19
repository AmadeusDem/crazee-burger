import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { getTabsConfig, getSelectedTab } from "../tabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AdminPanel() {
  const { selectedTab, productToEdit } = useContext(AdminContext);

  const hasAlreadyBeenClicked = productToEdit !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);

  const tab = getSelectedTab(tabs, selectedTab);

  return <AdminPanelStyled>{tab && tab.content}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  // Position and layout
  display: flex;
  align-items: center;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.medium};
  border: 1px solid ${theme.colors.greyLight};
  width: 100%;
  height: 240px;
  padding: 30px 5%;

  // Background
  background: ${theme.colors.white};
`;
