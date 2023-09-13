import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div style={{ background: "red" }}>Basket Header</div>
      <div style={{ background: "green" }}>Basket content</div>
      <div style={{ background: "yellow" }}>Basket footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  border-radius: 0px 0px 0px 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;
`;
