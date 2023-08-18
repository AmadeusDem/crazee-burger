import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: green;
  height: 5.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 4.375rem;
`;
