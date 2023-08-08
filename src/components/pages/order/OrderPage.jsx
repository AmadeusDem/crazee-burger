import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <>
      <h1>Bonjour</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
