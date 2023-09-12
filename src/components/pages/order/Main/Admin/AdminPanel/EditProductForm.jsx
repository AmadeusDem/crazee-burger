import { styled } from "styled-components";
import { getInputTextsConfig } from "./inputTextsConfig";
import Input from "../../../../../reusable-ui/Input";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import ImagePreview from "./ImagePreview";

export default function EditProductForm() {
  const { productToEdit, handleEdit, setProductToEdit, titleEditRef } = useContext(AdminContext);

  const InputText = getInputTextsConfig(productToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productEdited = { ...productToEdit, [name]: value };
    handleEdit(productEdited);
    setProductToEdit(productEdited);
  };

  return (
    <EditProductFormStyled>
      <ImagePreview imageSource={productToEdit.imageSource} title={productToEdit.title} />
      {InputText.map((input) => (
        <Input
          {...input}
          key={input.id}
          onChange={handleChange}
          ref={input.name === "title" ? titleEditRef : null}
        />
      ))}
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.form`
  padding: 20px 30px;
  width: 70%;
  display: grid;
  grid-gap: 8px 20px;
  grid-template-columns: 20% 1fr 2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "preview name name"
    "preview image image"
    "preview price price";

  .name-input {
    grid-area: name;
  }

  .image-input {
    grid-area: image;
  }

  .price-input {
    grid-area: price;
  }
`;
