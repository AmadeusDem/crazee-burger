import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx";
import NavbarRightSide from "./NavbarRightSide";
import { theme } from "../../../theme/index.js";
import { reloadPage } from "../../../utils/window.js";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo onClick={reloadPage} className="logo" />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.25rem;
  padding: 0 1.25rem;

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

  .logo:hover {
    cursor: pointer;
  }
`;
