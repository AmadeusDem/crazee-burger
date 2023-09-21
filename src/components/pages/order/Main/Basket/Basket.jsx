import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketProducts from "./BasketProducts";
import BasketFooter from "./BasketFooter";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";

export default function Basket() {
  const { basket } = useContext(AdminContext);
  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <BasketHeader />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  // Position and layout
  display: grid;
  grid-template-rows: 70px 1fr 70px;

  // Clipping
  overflow: hidden;

  // Box model (from outside in)
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 0px 15px;

  // Background
  background: ${theme.colors.background_white};
`;
