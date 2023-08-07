import { useState } from "react";

export default function LoginForm() {
  //States
  const [username, setUsername] = useState("");

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${username}`);
    setUsername("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // Affichage
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
