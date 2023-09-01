import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function Admin() {
  const { isPanelOpen } = useContext(AdminContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {isPanelOpen && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
