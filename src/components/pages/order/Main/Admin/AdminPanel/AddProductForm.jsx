import { styled } from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Input from "../../../../../reusable-ui/Input.jsx";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton.jsx";
import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../context/AdminContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
};

export default function AddProductForm() {
  const { handleAdd } = useContext(AdminContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

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
      <div className="image-preview">
        {imageSource ? <img src={imageSource} /> : <div className="no-image">Aucune image</div>}
      </div>
      <Input
        name="title"
        className="text-input name-input"
        Icon={<FaHamburger className="icon" />}
        placeholder="Nom du produit (ex: Super Burger)"
        value={title}
        onChange={handleChange}
      />
      <Input
        name="imageSource"
        className="text-input image-input"
        Icon={<BsCameraFill className="icon" />}
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        value={imageSource}
        onChange={handleChange}
        type="url"
      />
      <Input
        name="price"
        className="text-input price-input"
        Icon={<MdOutlineEuro className="icon" />}
        placeholder="Prix"
        value={price ? price : ""}
        onChange={handleChange}
      />
      <PrimaryButton label="Ajouter un nouveau produit au menu" className="add-product-button" />
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
    ". button success";

  .text-input {
    padding: 8px 16px 8px 24px;
    background: #f5f5f7;

    input {
      outline: none;
      background: #f5f5f7;
    }
  }

  .icon {
    color: #747b91;
  }

  .image-preview {
    grid-area: preview;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #93a2b1;
    border-radius: 5px;
    border: 1px solid #e4e5e9;

    .no-image {
      text-align: center;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  }

  .name-input {
    grid-area: name;
  }

  .image-input {
    grid-area: image;
  }

  .price-input {
    grid-area: price;
  }

  .successDiv {
    grid-area: success;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .successMessage {
    }
  }

  .add-product-button {
    grid-area: button;
    background: #60bd4f;
    border: 1px solid #60bd4f;
    height: 2.1875rem;

    &:hover {
      color: #60bd4f;
      background-color: white;
      transition: all 200ms ease-out;
    }
    &:active {
      color: white;
      background-color: #60bd4f;
    }
  }
`;
