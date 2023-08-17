import logoImg from "/images/logo-orange.png";
import { styled } from "styled-components";
import { theme } from "../../../theme";

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
    width: 200px;
    height: 150px;
    margin: 0 20px;
    object-fit: contain;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-family: "Amatic SC", cursive;
    font-size: 110px;
    color: ${theme.colors.primary};
    line-height: 0px;
    letter-spacing: 1.5px;
    font-weight: 700;
  }
`;
