import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../../enums/product";

export default function EmptyBasket({ isLoading }) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
      </span>
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
