import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditProductForm() {
  const { productToEdit, handleEdit, setProductToEdit, titleEditRef, handleBasketEdit } =
    useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productEdited = { ...productToEdit, [name]: value };
    handleEdit(productEdited);
    setProductToEdit(productEdited);
  };

  return (
    <Form product={productToEdit} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
