import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import PanelContent from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <PanelContent />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
