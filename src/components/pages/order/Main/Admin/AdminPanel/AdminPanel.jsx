import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { tabs, getSelectedTab } from "../tabsConfig";

export default function AdminPanel() {
  const { selectedTab } = useContext(AdminContext);

  const tab = getSelectedTab(tabs, selectedTab);

  return <AdminPanelStyled>{tab && tab.content}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 15.625rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.medium};
`;
