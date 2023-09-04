import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({ value, onChange, Icon, className, type = "text", ...extraProps }) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input onChange={onChange} value={value} type={type} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
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
