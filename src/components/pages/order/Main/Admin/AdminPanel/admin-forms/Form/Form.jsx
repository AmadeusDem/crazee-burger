import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Input from "../../../../../../../reusable-ui/Input";
import { getInputConfig } from "../../inputConfig";
import { forwardRef } from "react";
import { theme } from "../../../../../../../../theme";
import BooleanSelect from "../../../../../../../reusable-ui/BooleanSelect";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

const Form = forwardRef(({ product, onChange, onSubmit, children, onBlur, onFocus }, ref) => {
  const inputs = getInputConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      {inputs.map((input) => (
        <Input
          {...input}
          key={input.id}
          onChange={onChange}
          ref={ref && input.name === "title" ? ref : null}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ))}
      {/* <select name="isAvailable" className="availability-select">
        <option value="true">En stock</option>
        <option value="false">En rupture</option>
      </select> */}
      <BooleanSelect
        className="availability-select"
        Icon={<FiPackage />}
        trueText="En stock"
        falseText="En rupture"
        name="isAvailable"
      />
      <BooleanSelect
        className="advertising-select"
        Icon={<GoMegaphone />}
        trueText="Sans pub"
        falseText="Avec pub"
        name="isAdvertised"
      />
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
