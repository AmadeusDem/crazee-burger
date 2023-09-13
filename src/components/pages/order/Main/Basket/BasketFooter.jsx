import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <BasketFooterStyled>
      <span>Codé avec ❤️ et React.js</span>
    </BasketFooterStyled>
  );
}

const BasketFooterStyled = styled.div`
  // Position and layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model
  border-radius: 0px 0px 0px 15px;

  // Background
  background: ${theme.colors.background_dark};

  // Typography
  font-family: Amatic SC;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
`;
