import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";

export default function EmptyMenu({ isAdminMode, handleReset }) {
  return (
    <EmptyMenuStyled>
      {isAdminMode ? <EmptyMenuAdmin handleReset={handleReset} /> : <EmptyMenuUser />}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  // Position and layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.strong};
`;
