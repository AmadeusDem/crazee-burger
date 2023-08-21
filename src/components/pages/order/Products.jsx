import { styled } from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import ProductTemplate from "./ProductTemplate";
import { formatPrice } from "../../../utils/maths";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Products() {
  const menuData = fakeMenu1;

  return (
    <ProductsStyled>
      {menuData.map((product) => (
        <ProductTemplate
          key={product.id}
          title={product.title}
          price={formatPrice(product.price.toPrecision(2))}
        />
      ))}
    </ProductsStyled>
  );
}

const ProductsStyled = styled.section`
  display: grid;
  flex: 1;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 240px);
  gap: 3.75rem 5.3125rem;
  padding: 50px 92.5px;
  overflow: auto;
`;
