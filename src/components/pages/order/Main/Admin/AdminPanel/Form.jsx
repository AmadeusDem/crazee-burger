import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Input from "../../../../../reusable-ui/Input";
import { getInputTextsConfig } from "./inputTextsConfig";
import { forwardRef } from "react";
import { theme } from "../../../../../../theme";

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
  // Position and layout
  display: grid;
  grid-gap: ${theme.spacing.xs} ${theme.spacing.md};
  grid-template-columns: 20% 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "preview name name name"
    "preview image image image"
    "preview price price price"
    ". submit submit submit";

  // Box model (from outside in)
  width: 80%;
  max-height: 180px;
  padding: 20px 30px;

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
