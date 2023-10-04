import styled from "styled-components";
import { theme } from "../../../../../../theme";
import BasketCard from "./BasketCard/BasketCard";
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext.jsx";
import { AdminContext } from "../../../../../../context/AdminContext";
import { findObjectById } from "../../../../../../utils/array";
import { isProductClicked } from "../../../helpers/helper";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../../../utils/maths";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketProductsAnimation } from "../../../../../../theme/animations";
import { BASKET_MESSAGE } from "../../../../../../enums/product";

export default function BasketProducts() {
  const { isAdminMode, username } = useContext(OrderContext);
  const { productToEdit, menu, basket, handleBasketDelete, handleProductSelected } =
    useContext(AdminContext);

  return (
    <BasketProductsStyled>
      <TransitionGroup component={null} appear={true}>
        {basket.map(({ id, quantity }) => {
          const menuProduct = findObjectById(id, menu);
          const price = menuProduct.isAvailable
            ? formatPrice(parseFloat(replaceFrenchCommaWithDot(menuProduct.price)).toFixed(1))
            : BASKET_MESSAGE.NOT_AVAILABLE;

          return (
            <CSSTransition key={id} classNames="card" timeout={500}>
              <BasketCard
                title={menuProduct.title}
                imageSource={menuProduct.imageSource}
                className="basket-card"
                price={price}
                quantity={quantity}
                onDelete={(e) => handleBasketDelete(e, id, username)}
                isHoverable={isAdminMode}
                onClick={() => handleProductSelected(id)}
                isSelected={isProductClicked(id, productToEdit.id)}
                isAvailable={menuProduct.isAvailable}
                isAdvertised={menuProduct.isAdvertised}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
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
  overflow-x: hidden;

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

  ${basketProductsAnimation}
`;
