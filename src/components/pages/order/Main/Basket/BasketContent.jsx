import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketContent({ basket, handleBasketDelete }) {
  return (
    <BasketContentStyled>
      {basket.length > 0 ? (
        basket.map((product) => (
          <div className="basket-card" key={product.id}>
            <img src={product.imageSource} alt={`${product.title} image`} />
            <div className="card-information">
              <div className="title-and-price">
                <span>{product.title}</span>
                <p>{formatPrice(parseFloat(product.price).toFixed(1))}</p>
              </div>
              <div>
                <span className="quantity">x {product.quantity}</span>
              </div>
            </div>
            <button className="delete-button" onClick={() => handleBasketDelete(product.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="empty-basket">Votre commande est vide.</div>
      )}
    </BasketContentStyled>
  );
}

const BasketContentStyled = styled.div`
  // Position and layout
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 70px);
  grid-row-gap: 20px;
  padding: 20px 16px;

  overflow: hidden;
  overflow-y: auto;

  //Box model
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset;

  // Background
  background: ${theme.colors.background_white};

  // Typography
  font-family: Amatic SC;
  font-size: 36px;
  color: ${theme.colors.greyBlue};

  .basket-card {
    position: relative;
    max-height: 70px;
    display: flex;
    padding: 8px 16px;
    background: #fff;

    .delete-button {
      position: absolute;
      right: 0;
      display: none;
    }

    &:hover {
      .delete-button {
        display: block;
      }
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .card-information {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 11px;

      span {
        font-size: 24px;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;
