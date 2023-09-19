import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContext";

export default function NavbarRightSide() {
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext);

  const displayToast = () => {
    setIsAdminMode(!isAdminMode);
    if (!isAdminMode) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdminMode}
        onToggle={displayToast}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  // Position and layout
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;

  // Box model
  padding: 10px ${theme.spacing.md};

  // Typographys
  color: ${theme.colors.greyBlue};

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
