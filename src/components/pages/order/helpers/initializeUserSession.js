import { getMenu } from "../../../../api/menu";
import { getLocalStorage } from "../../../../utils/window";

const initializeMenu = async (username, setMenu) => {
  try {
    const menuToDisplay = await getMenu(username);
    setMenu(menuToDisplay);
  } catch (error) {
    console.error("Error: ", error);
  }
};

const initializeBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasket(basketReceived);
};

export const initializeUserSession = async (username, setMenu, setBasket) => {
  await initializeMenu(username, setMenu);
  initializeBasket(username, setBasket);
};
