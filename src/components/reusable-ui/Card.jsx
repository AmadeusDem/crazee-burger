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
}) {
  return (
    <CardStyled onClick={onClick} isHoverable={isHoverable}>
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
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
              <Button label={buttonLabel} className="primary-button" />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  ${({ isHoverable }) => isHoverable && hoverableStyle}

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
  }
`;

const hoverableStyle = css`
  all: unset;
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    border-radius: ${theme.borderRadius.extraRound};
    cursor: pointer;
  }
`;
