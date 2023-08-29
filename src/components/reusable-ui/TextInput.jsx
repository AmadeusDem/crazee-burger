import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};

  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
  }

  input {
    font-size: ${theme.fonts.SM};
    border: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
`;
