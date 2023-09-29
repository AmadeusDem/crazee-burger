import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUser(username);

    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
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

  button {
    width: 100%;
  }
`;
