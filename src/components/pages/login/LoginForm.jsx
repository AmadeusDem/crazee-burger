import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton label="Accéder à mon espace" Icon={<IoChevronForward className="icon" />} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  min-width: 400px;
  color: ${theme.colors.white};
  font-family: Amatic SC;
  text-transform: uppercase;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-top: 39.27px;
    margin-bottom: 32.16px;
  }

  hr {
    width: 400px;
    height: 3px;
    background: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.12rem;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
