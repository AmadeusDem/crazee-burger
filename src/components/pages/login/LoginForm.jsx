import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <Input
        value={username}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle />}
        className="username-input"
        version="normal"
      />
      <Button label="Accéder à mon espace" Icon={<IoChevronForward />} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px 0;
  color: ${theme.colors.white};

  text-transform: uppercase;

  h1 {
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    margin: ${theme.spacing.lg} 0;
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 10px;
  }

  button {
    width: 100%;
  }
`;
