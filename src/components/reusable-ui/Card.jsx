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
              <Button
                label={buttonLabel}
                className="primary-button"
                onClick={(e) => e.stopPropagation()}
              />
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
    display: grid;
    grid-template-rows: 65% 1fr;
    width: 240px;
    height: 330px;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.white};
    position: relative;

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      color: ${theme.colors.primary};
      border: none;
      background: none;
      height: 30px;
      width: 30px;
      cursor: pointer;
      padding: 0;

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
        font-size: ${theme.fonts.P4};
        position: relative;
        bottom: 10px;
        font-family: "Amatic SC", cursive;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .card-description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          align-items: center;
          color: ${theme.colors.primary};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .right-description {
          display: flex;
          align-items: center;

          .primary-button {
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
