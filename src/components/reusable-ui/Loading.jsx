import styled from "styled-components";
import { theme } from "../../theme";

export default function Loading({ text }) {
  return (
    <LoadingStyled>
      <span>{text}</span>
    </LoadingStyled>
  );
}

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${theme.fonts.P4};
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.weights.regular};
  color: ${theme.colors.greyBlue};
`;
