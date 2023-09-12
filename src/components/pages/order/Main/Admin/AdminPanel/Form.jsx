import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Input from "../../../../../reusable-ui/Input";
import { getInputTextsConfig } from "./inputTextsConfig";
import { forwardRef } from "react";

const Form = forwardRef(({ product, onChange, onSubmit, children }, ref) => {
  const InputText = getInputTextsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      {InputText.map((input) => (
        <Input
          {...input}
          key={input.id}
          onChange={onChange}
          ref={ref && input.name === "title" ? ref : null}
        />
      ))}
      <div className="submit">{children}</div>
    </FormStyled>
  );
});
Form.displayName = "Form";

export default Form;

const FormStyled = styled.form`
  padding: 20px 30px;
  width: 70%;
  display: grid;
  grid-gap: 8px 20px;
  grid-template-columns: 20% 1fr 2fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "preview name name name"
    "preview image image image"
    "preview price price price"
    ". submit submit .";

  .name-input {
    grid-area: name;
  }

  .image-input {
    grid-area: image;
  }

  .price-input {
    grid-area: price;
  }

  .submit {
    grid-area: submit;
  }
`;
