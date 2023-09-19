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
  // Position and layout
  display: flex;
  gap: ${theme.spacing.xs};

  // Typography
  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fonts.family.stylish};
`;
