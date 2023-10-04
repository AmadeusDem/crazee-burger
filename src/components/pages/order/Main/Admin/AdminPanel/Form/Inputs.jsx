import Input from "../../../../../../reusable-ui/Input.jsx";
import { forwardRef } from "react";
import SelectInput from "../../../../../../reusable-ui/SelectInput.jsx";
import { getInputTextConfig } from "./inputConfig.jsx";
import { getSelectInputConfig } from "./inputConfig.jsx";

const Inputs = forwardRef(({ product, onChange, onBlur, onFocus }, ref) => {
  const textInputs = getInputTextConfig(product);
  const selectInputs = getSelectInputConfig(product);

  return (
    <>
      {textInputs.map((input) => (
        <Input
          {...input}
          key={input.id}
          onChange={onChange}
          ref={ref && input.name === "title" ? ref : null}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ))}
      {selectInputs.map((select) => (
        <SelectInput
          key={select.id}
          {...select}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ))}
    </>
  );
});
Inputs.displayName = "Inputs";
export default Inputs;
