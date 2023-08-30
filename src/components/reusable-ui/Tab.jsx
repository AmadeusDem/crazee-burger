import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, label, onClick }) {
  return (
    <TabStyled onClick={onClick}>
      {Icon && <div className="icon">{Icon}</div>}
      {label && label}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  all: unset;

  // Position and layout
  position: relative;
  top: 1px;
  align-items: center;
  gap: 0.8125rem;

  // Display and visibility
  display: flex;

  // Box model
  padding: 0.625rem 1.375rem;

  box-shadow: ${theme.shadows.subtle};

  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  // Background
  background: ${theme.colors.white};
  cursor: pointer;

  // Typography
  color: ${theme.colors.greySemiDark};

  // Pseudo-classes
  &:hover {
    border-bottom-color: ${theme.colors.white};
    text-decoration: underline;
  }

  // Other elements
  .icon {
    display: flex;
  }
`;
