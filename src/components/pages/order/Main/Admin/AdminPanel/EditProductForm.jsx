import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import { OrderContext } from "../../../../../../context/OrderContext.jsx";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditProductForm() {
  const { productToEdit, handleEdit, setProductToEdit, titleEditRef } = useContext(AdminContext);
  const { username } = useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productEdited = { ...productToEdit, [name]: value };
    handleEdit(productEdited, username);
    setProductToEdit(productEdited);
  };

  return (
    <Form product={productToEdit} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
