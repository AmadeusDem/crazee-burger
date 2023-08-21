import { styled } from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "./Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const menuData = fakeMenu2;

  return (
    <MenuStyled>
      {menuData.map((product) => (
        <Card
          key={product.id}
          image={product.imageSource}
          title={product.title}
          price={formatPrice(product.price.toPrecision(2))}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  display: grid;
  flex: 1;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 240px);
  gap: 3.75rem 5.3125rem;
  padding: 50px 92.5px;
  overflow: auto;
`;
