import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="line-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`
  // Typography
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.SM};

  .line-update {
    text-decoration: underline;
  }
`;
