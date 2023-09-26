import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { isProductClicked } from "../../helpers/helper";
import { EMPTY_PRODUCT, PRODUCT_IMAGE_DEFAULT } from "../../../../../enums/product";
import { theme } from "../../../../../theme";
import EmptyMenu from "./EmptyMenu";
import Loading from "../../../../reusable-ui/Loading";

export default function Menu() {
  const {
    menu,
    handleDelete,
    handleReset,
    productToEdit,
    setProductToEdit,
    handleBasketAdd,
    handleBasketDelete,
    handleProductSelected,
  } = useContext(AdminContext);
  const { isAdminMode, username } = useContext(OrderContext);

  const handleCardDelete = (event, idToDelete, username) => {
    event.stopPropagation();
    handleDelete(idToDelete, username);
    handleBasketDelete(event, idToDelete, username);
    if (productToEdit && idToDelete === productToEdit.id) setProductToEdit(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, idProduct, username) => {
    e.stopPropagation();
    handleBasketAdd(idProduct, username);
  };

  if (!menu) return <Loading text="Chargement en cours..." />;

  if (menu.length === 0) {
    return <EmptyMenu isAdminMode={isAdminMode} handleReset={handleReset} />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          onClick={() => handleProductSelected(id)}
          image={imageSource ? imageSource : PRODUCT_IMAGE_DEFAULT}
          title={title}
          leftText={formatPrice(parseFloat(replaceFrenchCommaWithDot(price)).toFixed(1))}
          buttonLabel="Ajouter"
          hasDeleteButton={isAdminMode}
          onDelete={(e) => handleCardDelete(e, id, username)}
          isHoverable={isAdminMode}
          isSelected={isProductClicked(id, productToEdit.id)}
          onAdd={(e) => handleAddButton(e, id, username)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  // Position and layout
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-gap: 3.75rem 5.3125rem;
  justify-content: center;

  // Clipping
  overflow-y: auto;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.strong};
  padding: 50px 50px 150px;
`;
