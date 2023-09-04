import { styled } from "styled-components";
import { formatPrice } from "../../../../utils/maths";

import Card from "../../../reusable-ui/Card";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import { replaceFrenchCommaWithDot } from "../../../../utils/maths";

const PRODUCT_IMAGE_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu } = useContext(AdminContext);

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          image={imageSource ? imageSource : PRODUCT_IMAGE_DEFAULT}
          title={title}
          leftText={formatPrice(parseFloat(replaceFrenchCommaWithDot(price)).toFixed(1))}
          buttonLabel="Ajouter"
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 240px);
  overflow-y: scroll;

  padding: 50px 50px 150px;
  grid-gap: 3.75rem 5.3125rem;
`;
