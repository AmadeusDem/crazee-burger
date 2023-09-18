import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { useContext, useRef, useState } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { AdminContext } from "../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Basket from "./Basket/Basket";
import { useMenu } from "../../../../hooks/useMenu";
import { deepClone } from "../../../../utils/array";

export default function Main() {
  const { isAdminMode } = useContext(OrderContext);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, handleAdd, handleReset, handleDelete, handleEdit } = useMenu();
  const [basket, setBasket] = useState(menu.filter((product) => product.quantity > 0));

  const handleBasketAdd = (idToAdd) => {
    const basketCopy = deepClone(basket);
    const indexInMenu = menu.findIndex((product) => product.id === idToAdd);
    const productToAdd = menu[indexInMenu];
    productToAdd.quantity++;

    const productInBasket = basket.findIndex((product) => product.id === idToAdd);

    if (productInBasket > -1) {
      basketCopy[productInBasket].quantity++;
      setBasket(basketCopy);
    } else {
      basketCopy.unshift(productToAdd);
      setBasket(basketCopy);
    }
  };

  const handleBasketDelete = (idToDelete) => {
    const basketCopy = deepClone(basket);
    const basketEdited = basketCopy.filter((product) => product.id !== idToDelete);

    const indexInMenu = menu.findIndex((product) => product.id === idToDelete);
    const product = setBasket(basketEdited);
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
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <MainStyled>
        <Basket basket={basket} handleBasketDelete={handleBasketDelete} />
        <div className="menu-and-admin">
          <Menu />
          {isAdminMode && <Admin />}
        </div>
      </MainStyled>
    </AdminContext.Provider>
  );
}

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 25% 1fr;
  height: calc(95vh - 5.25rem);

  background: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  .menu-and-admin {
    position: relative;
    display: grid;
    border-radius: 0px 0px ${theme.borderRadius.extraRound} 0px;
    overflow: hidden;
  }
`;
