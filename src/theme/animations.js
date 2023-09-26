import { css, keyframes } from "styled-components";

export const adminAnimation = css`
  .panel-animated-appear {
    transform: translateY(100%);
    opacity: 0;

    &.panel-animated-appear-active {
      transform: translateY(0%);
      transition: 500ms;
      opacity: 1;
    }
  }
`;

export const basketProductsAnimation = css`
  .card-enter {
    transform: translateX(100px);
    opacity: 0;
  }

  .card-enter-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 1;
  }

  .card-exit-active {
    transform: translateX(-100px);
    transition: 0.5s;
    opacity: 0;
  }

  .card-appear {
    transform: translateX(100px);
    opacity: 0;
  }

  .card-appear-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 1;
  }
`;

export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
