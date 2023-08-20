import { styled } from "styled-components";
import { theme } from "../../theme/index";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  height: 53px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 1px solid #ff9f1b;
  border-radius: 5px;

  background-color: ${theme.colors.primary};
  color: white;
  font-weight: 700;

  cursor: pointer;

  .icon {
    margin: 0;
    color: white;
  }

  &:hover {
    background: white;
    color: #ff9f1b;

    .icon {
      color: #ff9f1b;
    }
  }
`;
