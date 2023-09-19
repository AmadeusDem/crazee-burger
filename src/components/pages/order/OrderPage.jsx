import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import { OrderContext } from "../../../context/OrderContext";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const orderContextValue = { isAdminMode, setIsAdminMode };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  // Position and layout
  display: flex;
  justify-content: center;
  align-items: center;

  // Box model
  height: 100vh;

  // Background
  background-color: ${theme.colors.primary};

  .container {
    // Position and layout
    display: flex;
    flex-direction: column;

    // Box model
    width: 100%;
    max-width: 1400px;
    height: 95vh;
  }
`;
