import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { PRODUCT_IMAGE_DEFAULT } from "../../../../../enums/product";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext.jsx";

export default function BasketProducts({ basket, handleBasketDelete }) {
  const { isAdminMode } = useContext(OrderContext);

  return (
    <BasketProductsStyled>
      {basket.map((product) => (
        <BasketCard
          key={product.id}
          title={product.title ? product.title : " "}
          imageSource={product.imageSource ? product.imageSource : PRODUCT_IMAGE_DEFAULT}
          price={product.price}
          quantity={product.quantity}
          onDelete={() => handleBasketDelete(product.id)}
          isHoverable={isAdminMode}
        />
      ))}
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

  overflow: hidden;
  overflow-y: auto;

  //Box model
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;

  // Background
  background: ${theme.colors.background_white};

  // Typography
  font-family: Amatic SC;
  font-size: 36px;
  color: ${theme.colors.greyBlue};

  .empty-basket {
    text-align: center;
  }
`;
