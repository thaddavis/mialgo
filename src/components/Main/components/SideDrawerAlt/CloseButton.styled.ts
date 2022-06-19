import styled from "styled-components";

interface StyledProps {
  isOpen: boolean;
}

export const CloseButtonStyled = styled.div<Pick<StyledProps, "isOpen">>`
  width: 48px;
  height: 48px;
  position: relative;
  margin: 0.2em;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    caret-color: transparent;
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme.colors.red};
    border-radius: 8px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  ${(props) =>
    !props.isOpen
      ? `
  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 18px;
  }

  span:nth-child(3) {
    top: 36px;
  }
  `
      : `
      span:nth-child(1) {
        top: 18px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
    
      span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
    
      span:nth-child(3) {
        top: 18px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
      `}
`;
