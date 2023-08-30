import { styled } from "styled-components";
import Tab from "./Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 0.0625rem;
  margin-left: 4.375rem;
`;
