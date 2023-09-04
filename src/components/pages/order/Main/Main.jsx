import { styled } from "styled-components";
import { theme } from "../../../../theme";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { AdminContext } from "../../../../context/AdminContext";

export default function Main() {
  const { isAdminMode } = useContext(OrderContext);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (newProduct) => {
    setMenu([newProduct, ...menu]);
  };

  const handleDelete = (idToDelete) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const filteredMenu = menuCopy.filter((product) => product.id !== idToDelete);

    setMenu(filteredMenu);
  };

  const adminContextValue = {
    isPanelOpen,
    setIsPanelOpen,
    selectedTab,
    setSelectedTab,
    menu,
    handleAdd,
    handleDelete,
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
