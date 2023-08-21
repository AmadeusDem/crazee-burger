import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <Menu />
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
`;
