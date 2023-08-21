import { styled } from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";

export default function ProductTemplate({ image, title, price }) {
  return (
    <ProductTemplateStyled>
      <img src={image} alt="Titre de l'article" />
      <div className="card-information">
        <h2>{title}</h2>
        <div className="card-description">
          <p>{price}</p>
          <PrimaryButton label="Ajouter" className="card-button" />
        </div>
      </div>
    </ProductTemplateStyled>
  );
}

const ProductTemplateStyled = styled.article`
  width: 240px;
  background: yellow;
`;
