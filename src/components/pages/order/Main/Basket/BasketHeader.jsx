import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { findObjectById } from "../../../../../utils/array";

export default function BasketHeader() {
  const { basket, menu } = useContext(AdminContext);

  const basketTotal = basket.reduce((total, product) => {
    const price = replaceFrenchCommaWithDot(findObjectById(product.id, menu).price);

    if (isNaN(price)) return total;
    return (total += product.quantity * price.toFixed(1));
  }, 0);

  return (
    <BasketHeaderStyled>
      <span>Total</span>
      <span className="price">{formatPrice(basketTotal.toFixed(2))}</span>
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
