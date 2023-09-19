import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  // Position and layout
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-message {
    // Typography
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.weights.regular};
    text-align: center;
    color: ${theme.colors.greyBlue};
  }
`;
