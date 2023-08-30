import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";

export default function AdminTabs() {
  const { isPanelOpen, setIsPanelOpen } = useContext(AdminContext);

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isPanelOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className={!isPanelOpen && "is-active"}
      />
      <Tab Icon={<AiOutlinePlus />} label="Ajouter un produit" />
      <Tab Icon={<MdModeEditOutline />} label="Modifier un produit" />
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
