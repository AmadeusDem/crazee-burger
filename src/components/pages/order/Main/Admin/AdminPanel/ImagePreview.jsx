import { styled } from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource, title = "Titre de l'article" }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="no-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  // Position and layout
  grid-area: preview;
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model (from outside in)
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};

  // Typography
  color: ${theme.colors.greyBlue};

  .no-image {
    text-align: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.P3};
  }
`;
