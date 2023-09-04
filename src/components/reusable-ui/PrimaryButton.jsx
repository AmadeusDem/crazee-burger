import { styled } from "styled-components";
import { theme } from "../../theme/index";

export default function PrimaryButton({ className, label, Icon, onClick }) {
  return (
    <PrimaryButtonStyled className={className} onClick={onClick}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;
  padding: 1.125rem 1.5rem;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.SM};
  font-weight: ${theme.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`;
