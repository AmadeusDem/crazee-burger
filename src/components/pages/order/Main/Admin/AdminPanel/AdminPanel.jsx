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
  height: 240px;

  width: 100%;
  display: flex;
  align-items: center;

  padding: 30px 5%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.medium};
`;
