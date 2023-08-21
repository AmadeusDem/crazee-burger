import { styled } from "styled-components";
import { theme } from "../../../theme";
import Products from "./Products";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="products">Products</div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  display: flex;
  overflow: hidden;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  flex: 1;

  .basket {
    background: blue;
  }

  .products {
    background: yellow;
    flex: 1;
  }
`;
