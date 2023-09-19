import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketProducts from "./BasketProducts";
import BasketFooter from "./BasketFooter";
import EmptyBasket from "./EmptyBasket";

export default function Basket({ basket, handleBasketDelete }) {
  const isBasketEmpty = basket.length === 0;
  const basketTotal = basket.reduce((total, product) => {
    if (isNaN(product.price)) return total;
    return (total += product.quantity * parseFloat(product.price).toFixed(1));
  }, 0);

  return (
    <BasketStyled>
      <BasketHeader total={basketTotal} />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts basket={basket} handleBasketDelete={handleBasketDelete} />
      )}
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  border-radius: 0px 0px 0px 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  overflow: hidden;
`;
