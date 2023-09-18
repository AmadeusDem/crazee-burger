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
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-message {
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.weights.regular};
    text-align: center;
  }
`;
