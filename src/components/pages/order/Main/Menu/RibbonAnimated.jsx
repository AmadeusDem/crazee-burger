import { CSSTransition } from "react-transition-group";
import Ribbon from "../../../../reusable-ui/Ribbon.jsx";
import { css } from "styled-components";

export default function RibbonAnimated() {
  return (
    <CSSTransition in={true} timeout={500} appear={true} classNames="ribbon-animation">
      <Ribbon className="ribbon" label="nouveau" />
    </CSSTransition>
  );
}

export const ribbonAnimation = css`
  .ribbon-animation-appear {
    position: absolute;
    opacity: 0.1;
    transform: scale(1.8);
    z-index: 2;
    &.ribbon-animation-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }
`;
