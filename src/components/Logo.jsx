import logoImg from "/images/logo-orange.png";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled className="logo">
      <h1>Crazee</h1>
      <img src={logoImg} alt="" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 12.5rem;
    height: 9.375rem;
    margin: 0 1.28rem;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-family: "Amatic SC";
    font-size: 6.875rem;
    color: ${theme.colors.primary};
  }
`;
