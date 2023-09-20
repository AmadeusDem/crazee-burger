import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo.jsx";
import NavbarRightSide from "./NavbarRightSide.jsx";
import { theme } from "../../../../theme/index.js";
import { reloadPage } from "../../../../utils/window.js";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo onClick={reloadPage} className="logo" />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  // Position and layout
  display: flex;
  justify-content: space-between;
  align-items: center;

  // Box model (from outside in)
  border-bottom: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
  height: 5.25rem;
  padding: 0 ${theme.spacing.md};

  // Background
  background: ${theme.colors.white};

  .logo:hover {
    cursor: pointer;
  }
`;
