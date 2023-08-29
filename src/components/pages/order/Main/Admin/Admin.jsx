import { styled } from "styled-components";
import TabsContainer from "./AdminTabs";
import PanelContent from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>
      <TabsContainer />
      <PanelContent />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  background: yellow;
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
