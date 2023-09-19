import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { PRODUCT_IMAGE_DEFAULT } from "../../../../../enums/product";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  id,
  title,
  imageSource,
  price,
  quantity,
  onDelete,
  isHoverable,
}) {
  return (
    <BasketCardStyled $isHoverable={isHoverable}>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource ? imageSource : PRODUCT_IMAGE_DEFAULT} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">
            {isNaN(price) ? formatPrice(price) : formatPrice(price.toFixed(1))}
          </span>
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  position: relative;

  display: grid;
  grid-template-columns: 30% 1fr;
  height: 86px;

  padding: 8px 16px;
  border-radius: ${theme.borderRadius.round};

  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);

  user-select: none;

  .image {
    height: 70px;

    img {
      padding: 5px;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-columns: 70% 30%;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P2};
    font-weight: 700;
    font-style: normal;
    grid-column-gap: 20px;

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        display: flex;
        font-family: Amatic SC;
        font-size: ${theme.fonts.P3};
        line-height: 32px;
        font-weight: ${theme.weights.bold};
        color: ${theme.colors.dark};
        /* sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span : https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work#:~:text=If%20your%20text%2Doverflow%20is,Grid%20or%20on%20a%20Table. */
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .quantity {
      font-weight: ${theme.weights.medium};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      font-size: ${theme.fonts.P3};
    }
  }

  .delete-button {
    display: none;
  }
`;

const hoverableStyle = css`
  cursor: pointer;
  &:hover {
    .delete-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0px 5px 5px 0px;

      position: absolute;
      right: 0;
      background: ${theme.colors.red};
      height: 100%;
      width: 25%;
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
`;
