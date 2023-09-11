import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

import Card from "../../../../reusable-ui/Card";
import { useContext } from "react";
import { AdminContext } from "../../../../../context/AdminContext";
import { OrderContext } from "../../../../../context/OrderContext.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuUser from "./EmptyMenuUser";

const PRODUCT_IMAGE_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu, handleDelete, handleReset, setIsPanelOpen, setSelectedTab, setProductToEdit } =
    useContext(AdminContext);
  const { isAdminMode } = useContext(OrderContext);

  const handleCardClick = (id) => {
    if (isAdminMode) {
      const productSelected = menu.find((product) => product.id === id);
      setProductToEdit(productSelected);
      setIsPanelOpen(true);
      setSelectedTab("edit");
    }
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
            onDelete={() => handleDelete(id)}
          />
        ))}
      </MenuStyled>
    );
  }
}

const MenuStyled = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 240px);
  overflow-y: scroll;

  padding: 50px 50px 150px;
  grid-gap: 3.75rem 5.3125rem;
`;

const EmptyMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
