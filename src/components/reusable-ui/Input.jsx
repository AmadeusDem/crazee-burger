import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ value, onChange, Icon, className, type = "text", version = "normal", ...extraProps }, ref) => {
    return (
      <InputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input onChange={onChange} value={value} type={type} {...extraProps} ref={ref} />
      </InputStyled>
    );
  }
);
Input.displayName = "Input";

export default Input;

const InputStyled = styled.div`
  // Position and layout
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  // Box model (from outside in)
  border-radius: ${theme.borderRadius.round};

  .icon {
    // Position and layout
    display: flex;
    justify-content: center;
    align-items: center;

    // Typography
    font-size: ${theme.fonts.SM};
  }

  input {
    // Box model (from outside in)
    border: none;
    width: 100%;

    // Typography
    font-size: ${theme.fonts.SM};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  margin-bottom: 18px;
  padding: 18px 24px;
  background: ${theme.colors.white};

  .icon {
    color: ${theme.colors.greySemiDark};
  }
`;

const extraStyleMinimalist = css`
  background: ${theme.colors.background_white};
  padding: 8px 16px 8px 24px;

  input {
    outline: none;
    background: ${theme.colors.background_white};
  }

  .icon {
    color: ${theme.colors.greyBlue};
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
