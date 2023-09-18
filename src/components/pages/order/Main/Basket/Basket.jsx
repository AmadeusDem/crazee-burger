import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketContent from "./BasketContent";
import BasketFooter from "./BasketFooter";
import { useState } from "react";

export default function Basket({ menu }) {
  const filteredMenu = menu.filter((product) => product.quantity > 0);
  const [basket, setBasket] = useState(filteredMenu);

  return (
    <BasketStyled>
      <BasketHeader />
      <BasketContent basket={basket} />
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
`;
