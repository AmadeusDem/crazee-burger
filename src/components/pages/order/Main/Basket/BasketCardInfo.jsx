import styled from "styled-components";
import { theme } from "../../../../../theme";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function BasketCardInfo({ title, price, quantity }) {
  return (
    <BasketCardInfoStyled>
      <div className="left-info">
        <div className="title">
          <span>{title}</span>
        </div>
        <span className="price">{price}</span>
      </div>
      <div className="quantity">
        <CasinoEffect count={`x ${quantity}`} className="quantity-span" />
      </div>
    </BasketCardInfoStyled>
  );
}

const BasketCardInfoStyled = styled.div`
  // Position and layout
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 20px;

  // Typography
  font-size: ${theme.fonts.P2};
  font-weight: ${theme.weights.bold};
  font-style: normal;
  color: ${theme.colors.primary};

  .left-info {
    // Position and layout
    display: grid;
    grid-template-rows: 60% 40%;

    // Box model (from outside in)
    margin-left: 21px;

    .title {
      // Position and layout
      display: flex;

      // Typography
      font-size: ${theme.fonts.P3};
      line-height: 32px;
      font-family: ${theme.fonts.family.stylish};
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
    // Position and layout
    display: flex;
    align-items: center;
    justify-content: flex-end;

    // Box model (from outside in)
    margin-right: 20px;

    // Typography
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.medium};

    .quantity-span {
      z-index: -1;
    }
  }
`;
