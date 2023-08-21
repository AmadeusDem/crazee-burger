import { styled } from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";

export default function Card({ image, title, price }) {
  return (
    <CardStyled>
      <img src={image} alt="Titre de l'article" />
      <div className="card-information">
        <h2>{title}</h2>
        <div className="card-description">
          <p>{price}</p>
          <PrimaryButton label="Ajouter" className="card-primary-button" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  padding: 50px 20px 10px 20px;
  justify-content: flex-end;

  background: white;
`;
