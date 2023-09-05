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

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  gap: 0.9375rem;

  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
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

  ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }};
`;

const extraStyleNormal = css`
  margin-bottom: 18px;
`;

const extraStyleMinimalist = css`
  background: #f5f5f7;
  padding: 8px 16px 8px 24px;

  input {
    outline: none;
    background: #f5f5f7;
  }

  .icon {
    color: #747b91;
  }
`;
