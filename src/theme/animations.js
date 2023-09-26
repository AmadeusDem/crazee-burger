import { css } from "styled-components";

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
