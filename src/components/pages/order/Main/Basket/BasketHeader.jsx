import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className="euros">0,00 €</span>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  // Position and layout
  display: flex;
  justify-content: space-between;
  align-items: center;

  // Box model
  padding: 0 16px;

  // Background
  background: ${theme.colors.background_dark};

  // Typography
  font-family: Amatic SC;
  font-size: 36px;
  letter-spacing: 2px;
  color: ${theme.colors.primary};

  .euros {
    font-weight: 700;
  }
`;
