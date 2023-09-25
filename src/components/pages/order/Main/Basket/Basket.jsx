import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketHeader from "./BasketHeader";
import BasketProducts from "./BasketProducts";
import BasketFooter from "./BasketFooter";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import Loading from "../../../../reusable-ui/Loading";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { findObjectById, isEmpty } from "../../../../../utils/array";

export default function Basket() {
  const { basket, menu } = useContext(AdminContext);
  let basketTotal = 0;
  if (menu) {
    basketTotal = basket.reduce((total, product) => {
      const price = replaceFrenchCommaWithDot(findObjectById(product.id, menu).price);

      if (isNaN(price)) return total;
      return (total += product.quantity * price.toFixed(1));
    }, 0);
  }

  return (
    <BasketStyled>
      <BasketHeader total={basketTotal} />
      {isEmpty(basket) ? (
        <EmptyBasket />
      ) : menu ? (
        <BasketProducts />
      ) : (
        <Loading text="Chargement en cours..." />
      )}
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
