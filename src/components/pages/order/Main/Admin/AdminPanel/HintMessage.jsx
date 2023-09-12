import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  font-family: Amatic SC, cursive;
  color: ${theme.colors.greyBlue};
  font-size: 24px;
  display: flex;
  gap: ${theme.spacing.xs};
`;
