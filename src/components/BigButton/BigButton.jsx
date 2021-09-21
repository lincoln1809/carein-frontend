import "./BigButton.css";
import React from "react";

export default function BigButton(props) {
  return (
    <div className="BigButtonCard">
      <div className="BigButtonTitle">{props.titulo}</div>
      <div className="BigButtonContent">
        <div classname="BigButtonIcon">{props.children}</div>
      </div>
    </div>
  );
}
