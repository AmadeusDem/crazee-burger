import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
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
`;
