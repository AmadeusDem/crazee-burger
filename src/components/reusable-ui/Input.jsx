import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { version } from "react";

export default function Input({
  value,
  onChange,
  Icon,
  className,
  type = "text",
  version = "normal",
  ...extraProps
}) {
  return (
    <InputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} value={value} type={type} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;

  border-radius: ${theme.borderRadius.round};
  gap: 0.9375rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
  }

  input {
    font-size: ${theme.fonts.SM};
    border: none;
    width: 100%;

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
