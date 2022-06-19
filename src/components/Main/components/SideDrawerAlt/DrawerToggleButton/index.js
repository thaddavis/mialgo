import * as React from "react";
import { Line, ToggleButton } from "./styles";

function drawerToggleButton(props) {
  return (
    <ToggleButton onClick={props.onClick}>
      <Line />
      <Line />
      <Line />
    </ToggleButton>
  );
}

export default drawerToggleButton;
