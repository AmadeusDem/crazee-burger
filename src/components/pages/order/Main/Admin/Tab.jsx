import { styled } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme";

export default function Tab() {
  return (
    <TabStyled class="active">
      <AiOutlinePlus />
      Ajouter un produit
    </TabStyled>
  );
}

const TabStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8125rem;

  padding: 0.625rem 1.375rem;
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;

  box-shadow: ${theme.shadows.subtle};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
`;
