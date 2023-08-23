import { styled } from "styled-components";
import { theme } from "../../../../theme";

import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  color: ${theme.colors.greyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
