import React from "react";

export function StatusIcon(props) {
  return !props.connected ? (
    <i
      style={{
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: "#e38968",
        marginRight: "6px",
      }}
    ></i>
  ) : (
    <i
      style={{
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: "#86bb71",
        marginRight: "6px",
      }}
    ></i>
  );
}
