import { useContext } from "react";
import { AdminContext } from "../../../../../../../context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.js";
import Form from "./Form.jsx";
import Button from "../../../../../../reusable-ui/Button.jsx";
import { OrderContext } from "../../../../../../../context/OrderContext.jsx";

export default function AddProductForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);
  const { username } = useContext(OrderContext);

  const displaySuccessToast = () => {
    toast.success("Produit ajouté avec succès !", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    const eventName = e.target.name;
    const value = e.target.value;
    setNewProduct({
      ...newProduct,
      [eventName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(productToAdd, username);
    displaySuccessToast();
    setNewProduct(EMPTY_PRODUCT);
  };

  return (
    <Form product={newProduct} onChange={handleChange} onSubmit={handleSubmit}>
      <Button
        label="Ajouter un nouveau produit au menu"
        version="action"
        className="add-product-button"
      />
    </Form>
  );
}
