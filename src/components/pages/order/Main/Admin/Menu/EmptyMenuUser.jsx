import { styled } from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMenuUser() {
  return (
    <EmptyMenuUserStyled>
      <h1>Victime de notre succès ! :D</h1>
      <p className="main-description">De nouvelles recettes sont en cours de préparation.</p>
      <p>À très vite !</p>
    </EmptyMenuUserStyled>
  );
}

const EmptyMenuUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${theme.colors.greyBlue};
    text-align: center;
    font-family: Amatic SC;
    font-size: 2.25rem;
  }

  p {
    color: ${theme.colors.greyBlue};
    text-align: center;
    font-size: 36px;
    font-family: Amatic SC;
  }

  .main-description {
    margin: 1.3125rem 0;
  }
`;
