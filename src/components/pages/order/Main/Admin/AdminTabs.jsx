import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";
import { getTabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  const { isPanelOpen, setIsPanelOpen, productToEdit, selectedTab, setSelectedTab } =
    useContext(AdminContext);

  const selectTab = (tabIndex) => {
    setIsPanelOpen(true);
    setSelectedTab(tabIndex);
  };

  const tabs = getTabsConfig(productToEdit.id);

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isPanelOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className={!isPanelOpen && "is-active"}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          Icon={tab.icon}
          label={tab.label}
          className={selectedTab === tab.index && "is-active"}
          onClick={() => selectTab(tab.index)}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  // Position and layout
  display: flex;
  gap: 0.0625rem;

  // Box model (from outside in)
  margin-left: 5%;

  .is-active {
    border-color: ${theme.colors.background_dark};

    background: ${theme.colors.background_dark};

    color: ${theme.colors.white};
  }
`;
