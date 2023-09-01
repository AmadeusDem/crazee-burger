import { styled } from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton.jsx";
import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageUrlChange = (e) => setImageUrl(e.target.value);

  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AddProductFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {imageUrl ? <img src={imageUrl} /> : <div className="no-image">Aucune image</div>}
      </div>
      <TextInput
        className="text-input name-input"
        Icon={<FaHamburger className="icon" />}
        placeholder="Nom du produit (ex: Super Burger)"
        value={name}
        onChange={handleNameChange}
      />
      <TextInput
        className="text-input image-input"
        Icon={<BsCameraFill className="icon" />}
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <TextInput
        className="text-input price-input"
        Icon={<MdOutlineEuro className="icon" />}
        placeholder="Prix"
        value={price}
        onChange={handlePriceChange}
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "preview name name"
    "preview image image"
    "preview price price"
    ". button .";

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
    background: #f5f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #93a2b1;
    border-radius: 5px;
    border: 1px solid #e4e5e9;

    .no-image {
    }

    img {
      width: 100%;
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
