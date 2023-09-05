import { styled } from "styled-components";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../../theme";

export default function EmptyMenuAdmin({ handleReset }) {
  return (
    <EmptyMenuAdminStyled>
      <h1>Le menu est vide ?</h1>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <PrimaryButton
        className="generate-button"
        label="Générer de nouveaux produits"
        onClick={handleReset}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    margin-bottom: 1.3125rem;
    color: ${theme.colors.greyBlue};
  }

  p {
    text-align: center;
    font-family: Amatic SC;
    font-size: 36px;
    color: ${theme.colors.greyBlue};
    margin-bottom: 1.9375rem;
  }

  .generate-button {
    width: fit-content;
  }
`;
