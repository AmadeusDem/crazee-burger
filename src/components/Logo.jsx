import logoImg from "../images/logo-orange.png";
import { styled } from "styled-components";

export default function Logo() {
  return (
    <LogoStyled className="logo">
      <h1>CRAZEE</h1>
      <img src={logoImg} alt="" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
`;
