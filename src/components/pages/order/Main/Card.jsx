import { styled } from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx";
import { theme } from "../../../../theme/index.js";

export default function Card({ image, title, price }) {
  return (
    <CardStyled>
      <div className="image">
        <img src={image} alt="Titre de l'article" />
      </div>
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
  display: grid;
  grid-template-rows: 65% 1fr;
  width: 240px;
  height: 330px;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  background: white;

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .card-information {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    h2 {
      margin: auto 0;
      font-size: 36px;
      position: relative;
      bottom: 10px;
      font-family: "Amatic SC", cursive;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
