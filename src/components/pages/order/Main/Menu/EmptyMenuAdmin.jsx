import { styled } from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";

export default function EmptyMenuAdmin({ handleReset }) {
  const { username } = useContext(OrderContext);

  return (
    <EmptyMenuAdminStyled>
      <h1>Le menu est vide ?</h1>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <Button
        className="generate-button"
        label="Générer de nouveaux produits"
        onClick={() => handleReset(username)}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  // Position and layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    // Box model
    margin-bottom: 1.3125rem;

    // Typography
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    color: ${theme.colors.greyBlue};
  }

  p {
    // Box model
    margin-bottom: 1.9375rem;

    // Typography
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fonts.family.stylish};
    text-align: center;
    color: ${theme.colors.greyBlue};
  }

  .generate-button {
    width: fit-content;
  }
`;
