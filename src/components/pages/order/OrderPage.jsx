import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <>
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
