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
  grid-area: preview;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.greyBlue};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};

  .no-image {
    text-align: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
