import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";
import { isProductClicked } from "./helper";
import { EMPTY_PRODUCT, PRODUCT_IMAGE_DEFAULT } from "../../../../../enums/product";
import { theme } from "../../../../../theme";
import { find } from "../../../../../utils/array";

export default function Menu() {
  const {
    menu,
    handleDelete,
    handleReset,
    setIsPanelOpen,
    setSelectedTab,
    productToEdit,
    setProductToEdit,
    titleEditRef,
    handleBasketAdd,
    handleBasketDelete,
  } = useContext(AdminContext);
  const { isAdminMode } = useContext(OrderContext);

  const handleCardClick = async (id) => {
    if (!isAdminMode) return;

    const productSelected = find(id, menu);

    await setIsPanelOpen(true);
    await setSelectedTab("edit");
    await setProductToEdit(productSelected);
    titleEditRef.current.focus();
  };

  const handleCardDelete = (event, idToDelete) => {
    event.stopPropagation();
    handleDelete(idToDelete);
    handleBasketDelete(idToDelete);
    if (productToEdit && idToDelete === productToEdit.id) setProductToEdit(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, idProduct) => {
    e.stopPropagation();
    const product = find(idProduct, menu);
    handleBasketAdd(product);
  };

  if (menu.length === 0) {
    return (
      <EmptyMenuContainer>
        {isAdminMode ? <EmptyMenuAdmin handleReset={handleReset} /> : <EmptyMenuUser />}
      </EmptyMenuContainer>
    );
  } else {
    return (
      <MenuStyled>
        {menu.map(({ id, imageSource, title, price }) => (
          <Card
            key={id}
            onClick={() => handleCardClick(id)}
            image={imageSource ? imageSource : PRODUCT_IMAGE_DEFAULT}
            title={title}
            leftText={formatPrice(parseFloat(replaceFrenchCommaWithDot(price)).toFixed(1))}
            buttonLabel="Ajouter"
            hasDeleteButton={isAdminMode}
            onDelete={(e) => handleCardDelete(e, id)}
            isHoverable={isAdminMode}
            isSelected={isProductClicked(id, productToEdit.id)}
            onAdd={(e) => handleAddButton(e, id)}
          />
        ))}
      </MenuStyled>
    );
  }
}

const MenuStyled = styled.section`
  // Position and layout
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-gap: 3.75rem 5.3125rem;
  justify-content: center;

  // Clipping
  overflow-y: scroll;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.strong};
  padding: 50px 50px 150px;
`;

const EmptyMenuContainer = styled.div`
  // Position and layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.strong};
`;
