import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, className, ...extraProps }) {
  return (
    <TextInputStyled className={className}>
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
  gap: 13px;

  padding: 18px 24px;

  .icon {
    color: ${theme.colors.greySemiDark};
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
