import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { useContext, useEffect, useRef, useState } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { AdminContext } from "../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Basket from "./Basket/Basket";
import { useMenu } from "../../../../hooks/useMenu";
import { useBasket } from "../../../../hooks/useBasket";
import { findObjectById } from "../../../../utils/array";
import { getMenu } from "../../../../api/menu";

export default function Main() {
  const { isAdminMode, username } = useContext(OrderContext);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  const { menu, setMenu, handleAdd, handleReset, handleDelete, handleEdit } = useMenu([]);
  const { basket, handleBasketAdd, handleBasketDelete, handleBasketEdit } = useBasket();

  const initializeMenu = async () => {
    try {
      const menuToDisplay = await getMenu(username);
      setMenu(menuToDisplay);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    initializeMenu();
  }, []);

  const handleProductSelected = async (idProduct) => {
    if (!isAdminMode) return;

    const productSelected = findObjectById(idProduct, menu);

    await setIsPanelOpen(true);
    await setSelectedTab("edit");
    await setProductToEdit(productSelected);
    titleEditRef.current.focus();
  };

  const adminContextValue = {
    isPanelOpen,
    setIsPanelOpen,
    selectedTab,
    setSelectedTab,
    menu,
    handleAdd,
    handleDelete,
    handleReset,
    newProduct,
    setNewProduct,
    productToEdit,
    handleEdit,
    setProductToEdit,
    titleEditRef,
    handleBasketAdd,
    handleBasketDelete,
    handleBasketEdit,
    basket,
    handleProductSelected,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <MainStyled>
        <Basket />
        <div className="menu-and-admin">
          <Menu />
          {isAdminMode && <Admin />}
        </div>
      </MainStyled>
    </AdminContext.Provider>
  );
}

const MainStyled = styled.main`
  // Position and layout
  display: grid;
  grid-template-columns: 25% 1fr;

  // Box model (from outside in)
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  height: calc(95vh - 5.25rem);

  background: ${theme.colors.background_white};

  .menu-and-admin {
    // Position and layout
    position: relative;
    display: grid;

    // Clipping
    overflow: hidden;

    // Box model
    border-radius: 0px 0px ${theme.borderRadius.extraRound} 0px;
  }
`;
