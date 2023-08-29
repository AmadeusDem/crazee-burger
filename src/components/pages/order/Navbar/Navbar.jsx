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
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.25rem;
  padding: 0 1.25rem;

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo:hover {
    cursor: pointer;
  }
`;
