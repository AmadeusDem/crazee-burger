import { styled } from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Input from "../../../../../reusable-ui/Input.jsx";
import PrimaryButton from "../../../../../reusable-ui/Button.jsx";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../../../theme/index.js";
import ImagePreview from "./ImagePreview.jsx";

export const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
};

export default function AddProductForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);

  const { title, imageSource, price } = newProduct;

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

    handleAdd(productToAdd);
    displaySuccessToast();
    setNewProduct(EMPTY_PRODUCT);
  };

  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      <Input
        name="title"
        className="name-input"
        Icon={<FaHamburger className="icon" />}
        placeholder="Nom du produit (ex: Super Burger)"
        value={title}
        onChange={handleChange}
        version="minimalist"
      />
      <Input
        name="imageSource"
        className="image-input"
        Icon={<BsCameraFill className="icon" />}
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        value={imageSource}
        onChange={handleChange}
        type="url"
        version="minimalist"
      />
      <Input
        name="price"
        className="price-input"
        Icon={<MdOutlineEuro className="icon" />}
        placeholder="Prix"
        value={price ? price : ""}
        onChange={handleChange}
        version="minimalist"
      />
      <PrimaryButton
        label="Ajouter un nouveau produit au menu"
        version="action"
        className="add-product-button"
      />
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.form`
  padding: 20px 30px;
  width: 70%;
  display: grid;
  grid-gap: 8px 20px;
  grid-template-columns: 20% 1fr 2fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "preview name name"
    "preview image image"
    "preview price price"
    ". button .";

  .name-input {
    grid-area: name;
  }

  .image-input {
    grid-area: image;
  }

  .price-input {
    grid-area: price;
  }

  .add-product-button {
    grid-area: button;
  }
`;
