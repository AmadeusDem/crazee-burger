import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { AdminContext } from "../../../../../context/AdminContext";
import { findObjectById } from "../../../../../utils/array";
import { isProductClicked } from "../../helpers/helper";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
  const { isAdminMode, username } = useContext(OrderContext);
  const { productToEdit, menu, basket, handleBasketDelete, handleProductSelected } =
    useContext(AdminContext);

  return (
    <BasketProductsStyled>
      <TransitionGroup component={null} appear={true}>
        {basket.map(({ id, quantity }) => {
          const menuProduct = findObjectById(id, menu);
          return (
            <CSSTransition key={id} classNames="card" timeout={500}>
              <BasketCard
                title={menuProduct.title}
                imageSource={menuProduct.imageSource}
                className="basket-card"
                price={formatPrice(
                  parseFloat(replaceFrenchCommaWithDot(menuProduct.price)).toFixed(1)
                )}
                quantity={quantity}
                onDelete={(e) => handleBasketDelete(e, id, username)}
                isHoverable={isAdminMode}
                onClick={() => handleProductSelected(id)}
                isSelected={isProductClicked(id, productToEdit.id)}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  .card-enter {
    transform: translateX(100px);
    opacity: 0;
  }

  .card-enter-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 1;
  }

  .card-exit-active {
    transform: translateX(-100px);
    transition: 0.5s;
    opacity: 0;
  }

  .card-appear {
    transform: translateX(100px);
    opacity: 0;
  }

  .card-appear-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 1;
  }

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
`;
