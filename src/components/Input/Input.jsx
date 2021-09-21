import "./Input.css";
import React from "react";

export default function Input(props) {
  return (
    <div className="inputArea">
      <h className="inputHeader">{props.label}</h>
      <input
        placeholder={props.placeholder}
        className="inputBox"
        type={props.type}
      />
      <div className="inputHelpText">{props.helpText}</div>
    </div>
  );
}
