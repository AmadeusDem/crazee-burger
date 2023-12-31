import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import backgroundImage from "/images/burger-background.jpg";
import { theme } from "../../../theme";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className="logo" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.family.stylish};

  background: url(${backgroundImage}), rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  .logo {
    transform: scale(2.5);
  }
`;
