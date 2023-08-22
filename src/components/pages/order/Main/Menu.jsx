import { useState } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          image={imageSource}
          title={title}
          leftText={formatPrice(price.toPrecision(2))}
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

  padding: 50px 50px 150px;
  grid-gap: 3.75rem 5.3125rem;
`;
