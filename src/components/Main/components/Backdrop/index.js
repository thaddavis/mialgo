import React from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;
`;

export function Backdrop(props) {
  return <BackgroundDiv onClick={props.onClick} />;
}
