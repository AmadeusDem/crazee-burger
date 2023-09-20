import { css, styled } from "styled-components";
import Button from "./Button.jsx";
import { theme } from "../../theme/index.js";
import { TiDelete } from "react-icons/ti";

export default function Card({
  title,
  image,
  leftText,
  buttonLabel,
  onClick,
  hasDeleteButton,
  onDelete,
  isHoverable,
  isSelected,
  onAdd,
}) {
  return (
    <CardStyled onClick={onClick} $isHoverable={isHoverable} $isSelected={isSelected}>
      <div className="card">
        {hasDeleteButton && (
          <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
            <TiDelete className="icon" />
          </button>
        )}
        <div className="image">
          <img src={image} alt="Titre de l'article" />
        </div>
        <div className="card-information">
          <h2>{title}</h2>
          <div className="card-description">
            <div className="left-description">
              <p>{leftText}</p>
            </div>
            <div className="right-description">
              <Button label={buttonLabel} className="primary-button" onClick={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: fit-content;

  .card {
    // Position and layout
    position: relative;
    display: grid;
    grid-template-rows: 65% 1fr;

    // Box model (from outside in)
    box-shadow: ${theme.shadows.strong};
    border-radius: ${theme.borderRadius.extraRound};
    width: 240px;
    height: 330px;
    padding: ${theme.spacing.md};
    padding-bottom: 10px;

    // Background
    background: ${theme.colors.white};

    .delete-button {
      // Position and layout
      position: absolute;
      top: 15px;
      right: 15px;

      // Box model (from outside in)
      border: none;
      width: 30px;
      height: 30px;
      padding: 0;

      // Background
      background: none;
      cursor: pointer;

      // Typography
      color: ${theme.colors.primary};

      .icon {
        height: 100%;
        width: 100%;
      }

      :hover {
        color: ${theme.colors.red};
      }

      :active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      // Box model
      margin-top: 30px;
      margin-bottom: 20px;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .card-information {
      // Position and layout
      display: grid;
      grid-template-rows: 30% 70%;

      // Box models
      padding: 5px;

      h2 {
        // Position and layout
        position: relative;
        bottom: 10px;

        // Clipping
        overflow: hidden;

        // Box model
        margin: auto 0;

        // Typography
        font-size: ${theme.fonts.P4};
        font-family: ${theme.fonts.family.stylish};
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .card-description {
        // Position and layout
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          // Position and layout
          display: flex;
          align-items: center;

          // Clipping
          overflow: hidden;

          // Typography
          white-space: nowrap;
          color: ${theme.colors.primary};
          text-overflow: ellipsis;
        }

        .right-description {
          display: flex;
          align-items: center;

          .primary-button {
            width: 100%;
            font-size: ${theme.fonts.XS};
            padding: 0.75rem;
          }
        }
      }
    }
    ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  transition: ease-out 0.4s;
  &:hover {
    transform: scale(1.05);

    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .primary-button {
    width: 100%;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-color: ${theme.colors.white};
    }

    &:active {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .card-information .card-description .left-description {
    color: ${theme.colors.white};
  }
`;
