import { styled } from "styled-components";
import { theme } from "../../../../../theme";

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
  // Position and layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    // Typography
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    color: ${theme.colors.greyBlue};
  }

  p {
    // Typography
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    color: ${theme.colors.greyBlue};
  }

  .main-description {
    margin: 1.3125rem 0;
  }
`;
