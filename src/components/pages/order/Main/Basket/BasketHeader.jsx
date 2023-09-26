import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function BasketHeader({ total = 0 }) {
  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <CasinoEffect count={formatPrice(total.toFixed(2))} className="price" />
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
  font-size: ${theme.fonts.P4};
  letter-spacing: 2px;
  font-family: ${theme.fonts.family.stylish};
  color: ${theme.colors.primary};

  .price {
    font-weight: ${theme.weights.bold};
  }
`;
