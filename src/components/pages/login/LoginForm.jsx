import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { PiUserCircleFill } from "react-icons/pi";
import { HiChevronRight } from "react-icons/hi";

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
      <div className="input-container">
        <PiUserCircleFill className="icon-user-circle" />
        <input
          type="text"
          value={username}
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </div>
      <button>
        <span>Accéder à mon espace</span>
        <HiChevronRight className="chevron-icon" />
      </button>
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

  .input-container {
    display: inline-flex;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    align-items: center;
    padding: 18px 24px;
    gap: 13px;
    margin-bottom: 1.12rem;
  }

  input {
    font-size: 15px;
    border: none;
    width: 100%;
  }

  input::placeholder {
    color: #d3d3d3;
  }

  .icon-user-circle {
    color: #747b91;
    width: 15px;
    height: 15px;
  }

  button {
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.8px;
    border: 1px solid #ff9f1b;
    border-radius: 5px;
    align-items: center;
    background-color: ${theme.colors.primary};
    color: white;
    font-weight: 700;
    cursor: pointer;

    .chevron-icon {
      color: white;
      width: 15px;
      height: 15px;
    }
  }

  button:hover {
    background: white;
    color: #ff9f1b;

    .chevron-icon {
      color: #ff9f1b;
    }
  }
`;
