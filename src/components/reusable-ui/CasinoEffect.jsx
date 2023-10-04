import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup component={null} appear>
        <CSSTransition key={count} classNames="casino" timeout={300}>
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  /* overflow-y: hidden; */
  span {
    display: inline-block;
  }

  .casino-enter {
    transform: translateY(100%);
    opacity: 0;
  }

  .casino-enter-active {
    transform: translateY(0%);
    transition: 300ms;
    opacity: 1;
  }

  .casino-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .casino-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
    opacity: 0;
  }

  .casino-appear {
    transform: translateY(100%);
    opacity: 0;
  }

  .casino-appear-active {
    transform: translateY(0%);
    transition: 300ms;
    opacity: 1;
  }
`;
