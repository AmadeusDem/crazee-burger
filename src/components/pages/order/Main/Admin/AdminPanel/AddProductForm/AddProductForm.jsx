import { useContext } from "react";
import { AdminContext } from "../../../../../../../context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.js";
import Form from "../Form/Form.jsx";
import Button from "../../../../../../reusable-ui/Button.jsx";
import { OrderContext } from "../../../../../../../context/OrderContext.jsx";
import { convertStringToBoolean } from "../../../../../../../utils/string.js";

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
    let { name, value } = e.target;
    if (name === "isAvailable" || name === "isAdvertised") {
      value = convertStringToBoolean(value);
    }
    setNewProduct({
      ...newProduct,
      [name]: value,
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
