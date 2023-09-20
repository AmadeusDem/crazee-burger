import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { AdminContext } from "../../../../../context/AdminContext";
import { findObjectById } from "../../../../../utils/array";
import { isProductClicked } from "../helper";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../../utils/maths";

export default function BasketProducts() {
  const { isAdminMode } = useContext(OrderContext);
  const { productToEdit, menu, basket, handleBasketDelete, handleProductSelected } =
    useContext(AdminContext);

  return (
    <BasketProductsStyled>
      {basket.map(({ id, quantity }) => {
        const menuProduct = findObjectById(id, menu);
        return (
          <BasketCard
            key={id}
            title={menuProduct.title}
            imageSource={menuProduct.imageSource}
            price={formatPrice(parseFloat(replaceFrenchCommaWithDot(menuProduct.price)).toFixed(1))}
            quantity={quantity}
            onDelete={(e) => handleBasketDelete(e, id)}
            isHoverable={isAdminMode}
            onClick={() => handleProductSelected(id)}
            isSelected={isProductClicked(id, productToEdit.id)}
          />
        );
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  // Position and layout
  display: flex;
  flex-direction: column;
  justify-content: start;

  gap: 20px;
  padding: 20px 16px;

  overflow-y: auto;

  //Box model
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;

  // Background
  background: ${theme.colors.background_white};

  // Typography
  font-size: ${theme.fonts.P4};
  font-family: ${theme.fonts.family.stylish};
  color: ${theme.colors.greyBlue};

  .empty-basket {
    text-align: center;
  }
`;
