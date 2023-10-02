import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function Admin() {
  const { isPanelOpen } = useContext(AdminContext);

  return (
    <AdminStyled>
      <div>
        <AdminTabs />
        {isPanelOpen && <AdminPanel />}
      </div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1;
`;
