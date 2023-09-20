import logoImg from "/images/logo-orange.png";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Crazee</h1>
      <img src={logoImg} alt="" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  // Position and layout
  display: flex;
  align-items: center;

  h1 {
    // Position and layout
    display: inline;

    // Typography
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.weights.bold};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${theme.colors.primary};
  }

  img {
    object-fit: contain;
    object-position: center;
    margin: 0 ${theme.gridUnit / 2}px;
    width: 80px;
    height: 60px;
  }
`;
