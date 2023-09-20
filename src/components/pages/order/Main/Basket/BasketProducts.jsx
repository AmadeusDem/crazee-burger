import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";

import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { AdminContext } from "../../../../../context/AdminContext";
import { find } from "../../../../../utils/array";
import { isProductClicked } from "../helper";

export default function BasketProducts({ basket, handleBasketDelete }) {
  const { isAdminMode } = useContext(OrderContext);
  const { productToEdit, setProductToEdit, setSelectedTab, setIsPanelOpen, menu, titleEditRef } =
    useContext(AdminContext);

  const handleCardClick = async (id) => {
    if (!isAdminMode) return;

    const productSelected = find(id, menu);

    await setIsPanelOpen(true);
    await setSelectedTab("edit");
    await setProductToEdit(productSelected);
    titleEditRef.current.focus();
  };

  return (
    <BasketProductsStyled>
      {basket.map((product) => (
        <BasketCard
          key={product.id}
          {...product}
          onDelete={(e) => handleBasketDelete(e, product.id)}
          isHoverable={isAdminMode}
          onClick={() => handleCardClick(product.id)}
          isSelected={isProductClicked(product.id, productToEdit.id)}
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
