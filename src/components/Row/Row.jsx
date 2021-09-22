import "./Row.css";
import React from "react";

export default function Row(props) {
  const rowWidth = {
    width: props.width || "100%",
  };
  return (
    <div className="Row" style={rowWidth}>
      {props.children}
    </div>
  );
}
