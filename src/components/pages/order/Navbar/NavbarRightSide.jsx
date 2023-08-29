import { styled } from "styled-components";
import { theme } from "../../../../theme";

import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  color: ${theme.colors.greyBlue};
  display: flex;
  gap: 3.125rem;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
