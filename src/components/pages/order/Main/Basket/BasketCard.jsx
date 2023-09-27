import styled, { css } from "styled-components";
import { PRODUCT_IMAGE_DEFAULT } from "../../../../../enums/product";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";
import BasketCardInfo from "./BasketCardInfo";

export default function BasketCard({
  id,
  title,
  imageSource,
  price,
  quantity,
  onDelete,
  isHoverable,
  isSelected,
  onClick,
  ...extraProps
}) {
  return (
    <BasketCardStyled
      $isHoverable={isHoverable}
      $isSelected={isSelected}
      onClick={onClick}
      {...extraProps}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource ? imageSource : PRODUCT_IMAGE_DEFAULT} alt={title} />
      </div>
      <BasketCardInfo title={title} price={price} quantity={quantity} />
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}

  // Position and layout
  position: relative;
  display: grid;
  grid-template-columns: 30% 1fr;

  // Box model (from outside in)
  box-shadow: ${theme.shadows.basketCard};
  border-radius: ${theme.borderRadius.round};
  height: 86px;
  padding: ${theme.spacing.xs} 16px;

  // Background
  background: ${theme.colors.white};
  user-select: none;

  .image {
    height: 70px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      padding: 5px;

      font-size: ${theme.fonts.P3};

      object-fit: contain;
    }
  }

  .delete-button {
    display: none;
  }

  &:hover {
    .delete-button {
      // Position and layout
      z-index: 1;
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      // Box model (from outside in)
      border-radius: 0px 5px 5px 0px;
      width: 25%;
      height: 100%;

      // Background
      background: ${theme.colors.red};
      cursor: pointer;

      .icon {
        width: 24px;
        height: 24px;
        color: ${theme.colors.white};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
      }

      &:active {
        .icon {
          color: ${theme.colors.white};
        }
      }
    }
  }

  ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .left-info {
    color: ${theme.colors.white};
  }

  .quantity {
    color: ${theme.colors.white};
  }
`;

const hoverableStyle = css`
  cursor: pointer;
`;
