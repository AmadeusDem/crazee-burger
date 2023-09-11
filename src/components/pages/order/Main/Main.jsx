import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { AdminContext } from "../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import { deepClone } from "../../../../utils/array";

const DEFAULT_MENU = fakeMenu.LARGE;

export default function Main() {
  const { isAdminMode } = useContext(OrderContext);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("add");
  const [menu, setMenu] = useState(DEFAULT_MENU);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState(EMPTY_PRODUCT);

  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    setMenu([newProduct, ...menuCopy]);
  };

  const handleEdit = (productEdited) => {
    const menuCopy = deepClone(menu);

    const indexToEdit = menuCopy.findIndex((product) => product.id === productEdited.id);

    menuCopy[indexToEdit] = productEdited;

    setMenu(menuCopy);
  };

  const handleDelete = (idToDelete) => {
    if (productToEdit && idToDelete === productToEdit.id) setProductToEdit(EMPTY_PRODUCT);

    const menuCopy = deepClone(menu);

    const filteredMenu = menuCopy.filter((product) => product.id !== idToDelete);

    setMenu(filteredMenu);
  };

  const handleReset = () => {
    setMenu(DEFAULT_MENU);
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
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <MainStyled>
        {/* <div className="basket">Basket</div> */}
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
  grid-template-columns: 1fr;
  height: calc(95vh - 5.25rem);

  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  .menu-and-admin {
    position: relative;
    display: grid;
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    overflow: hidden;
  }
`;
