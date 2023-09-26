import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  h1 {
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    margin: ${theme.spacing.lg} 0;
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 10px;
  }
`;
