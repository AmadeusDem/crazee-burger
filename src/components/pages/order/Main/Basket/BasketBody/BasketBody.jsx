import { useContext } from "react";
import { isEmpty } from "../../../../../../utils/array";
import { AdminContext } from "../../../../../../context/AdminContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function BasketBody() {
  const { basket, menu } = useContext(AdminContext);
  return (
    <>{isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}</>
  );
}
