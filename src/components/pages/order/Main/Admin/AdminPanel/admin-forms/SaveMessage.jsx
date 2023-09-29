import styled from "styled-components";
import { BsCloudCheck } from "react-icons/bs";
import { theme } from "../../../../../../../theme";

export default function SaveMessage() {
  return (
    <SaveMessageStyled>
      <BsCloudCheck className="icon" />
      <span>Modifications enregistrées !</span>
    </SaveMessageStyled>
  );
}

const SaveMessageStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.blue};

  .icon {
    width: 18px;
    height: 18px;
  }

  span {
    font-size: ${theme.fonts.SM};
  }
`;
