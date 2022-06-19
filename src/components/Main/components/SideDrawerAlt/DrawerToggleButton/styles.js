import styled from "styled-components";

export const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  /* @media(min-width: 769px) {
    display: none;
  } */
`;

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;
