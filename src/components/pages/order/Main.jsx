import { styled } from "styled-components";

export default function Main() {
  return <MainStyled className="main">Main</MainStyled>;
}

const MainStyled = styled.main`
  background: blue;
  flex: 1;
`;
