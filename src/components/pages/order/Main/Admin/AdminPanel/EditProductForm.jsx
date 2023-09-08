import { styled } from "styled-components";
import { getInputTextsConfig } from "./inputTextsConfig";
import Input from "../../../../../reusable-ui/Input";
import { useContext } from "react";
import { AdminContext } from "../../../../../../context/AdminContext";
import ImagePreview from "./ImagePreview";

export default function EditProductForm() {
  const { newProduct } = useContext(AdminContext);

  const InputText = getInputTextsConfig(newProduct);

  const handleChange = (e) => {
    const eventName = e.target.name;
    const value = e.target.value;
    console.log(eventName, value);
  };

  return (
    <EditProductFormStyled>
      <ImagePreview />
      {InputText.map((input) => (
        <Input key={input.id} {...input} onChange={handleChange} />
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
