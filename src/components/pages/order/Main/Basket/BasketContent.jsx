import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketContent() {
  return (
    <BasketContentStyled>
      <div className="empty-basket">Votre commande est vide.</div>
    </BasketContentStyled>
  );
}

const BasketContentStyled = styled.div`
  // Position and layout
  display: flex;
  align-items: center;
  justify-content: center;

  //Box model
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;

  // Background
  background: ${theme.colors.background_white};

  // Typography
  font-family: Amatic SC;
  font-size: 36px;
  color: ${theme.colors.greyBlue};
`;
