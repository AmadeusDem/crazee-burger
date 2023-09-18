import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({ id, title, imageSource, price, quantity, onDelete }) {
  return (
    <BasketCardStyled>
      <div className="delete-button">
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{formatPrice(parseFloat(price.toFixed(1)))}</span>
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 30% 1fr;
  height: 86px;

  padding: 8px 16px;
  border-radius: ${theme.borderRadius.round};

  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);

  .image {
    max-height: 70px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      padding: 5px;
    }
  }

  .text-info {
    display: grid;
    grid-template-columns: 70% 30%;
    color: ${theme.colors.primary};
    font-size: 15px;
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
      font-size: ${theme.fonts.SM};
    }
  }

  .delete-button {
    display: none;
  }
`;
