import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={username}
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
