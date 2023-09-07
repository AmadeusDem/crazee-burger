import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";
import { tabs } from "./tabsConfig";

export default function AdminTabs() {
  const { isPanelOpen, setIsPanelOpen, selectedTab, setSelectedTab } = useContext(AdminContext);

  const selectTab = (tabIndex) => {
    setIsPanelOpen(true);
    setSelectedTab(tabIndex);
  };

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
  display: flex;
  gap: 0.0625rem;
  margin-left: 5%;

  .is-active {
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
  }
`;
