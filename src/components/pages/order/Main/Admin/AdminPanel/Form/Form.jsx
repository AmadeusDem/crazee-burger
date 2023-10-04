import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { forwardRef } from "react";
import { theme } from "../../../../../../../theme";
import Inputs from "./Inputs";

const Form = forwardRef(({ product, onChange, onSubmit, children, onBlur, onFocus }, ref) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      <Inputs product={product} onChange={onChange} onBlur={onBlur} onFocus={onFocus} ref={ref} />
      <div className="submit">{children}</div>
    </FormStyled>
  );
});
Form.displayName = "Form";

export default Form;

const FormStyled = styled.form`
  // Position and layout
  display: grid;
  grid-gap: ${theme.spacing.xs} ${theme.spacing.xs};
  grid-template-columns: 20% 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "preview name name name"
    "preview image image image"
    "preview price availability advertising"
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

  .availability-select {
    grid-area: availability;
  }

  .advertising-select {
    grid-area: advertising;
  }
`;
