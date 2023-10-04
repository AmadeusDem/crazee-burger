import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../../context/AdminContext";
import { OrderContext } from "../../../../../../../context/OrderContext.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";
import Form from "../Form/Form.jsx";
import SaveMessage from "./SaveMessage.jsx";
import { convertStringToBoolean } from "../../../../../../../utils/string";

export default function EditProductForm() {
  const { productToEdit, handleEdit, setProductToEdit, titleEditRef } = useContext(AdminContext);
  const { username } = useContext(OrderContext);
  const [savingModification, setSavingModification] = useState(false);
  const [valueOnFocus, setValueOnFocus] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "isAvailable" || name === "isAdvertised") {
      value = convertStringToBoolean(value);
    }
    const productEdited = { ...productToEdit, [name]: value };

    handleEdit(productEdited, username);
    setProductToEdit(productEdited);
  };

  const handleOnFocus = (e) => {
    setValueOnFocus(e.target.value);
  };

  const handleOnBlur = (e) => {
    const value = e.target.value;
    if (value !== valueOnFocus) {
      setSavingModification(true);
      setTimeout(() => {
        setSavingModification(false);
      }, 2000);
    }
    setValueOnFocus("");
  };

  return (
    <Form
      product={productToEdit}
      onChange={handleChange}
      ref={titleEditRef}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
    >
      {savingModification ? <SaveMessage /> : <EditInfoMessage />}
    </Form>
  );
}
