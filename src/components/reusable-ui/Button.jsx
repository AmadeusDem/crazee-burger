import { css, styled } from "styled-components";
import { theme } from "../../theme/index";

export default function Button({ className, label, Icon, onClick, version = "primary" }) {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;

  // Position and layout
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.

  // Box model
  padding: 1.125rem 1.5rem;
  border-radius: ${theme.borderRadius.round};

  //Background
  cursor: pointer;

  // Typography
  font-size: ${theme.fonts.SM};
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  line-height: 1;
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  white-space: nowrap; //prevents the text label from wrapping to the next line.

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.SM};
  }

  ${({ version }) => extraStyle[version]}
`;

const extraStylePrimary = css`
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
`;

const extraStyleAction = css`
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  height: 2.1875rem;

  &:hover {
    color: ${theme.colors.success};
  }
  &:active {
    background-color: ${theme.colors.success};
  }
`;

const extraStyle = {
  primary: extraStylePrimary,
  action: extraStyleAction,
};
