import "./Input.css";
import React, { useState } from "react";

export default function Input(props) {
  const inputWidth = {
    width: props.width || "100%",
  };
  const [valor, setValor] = useState("");
  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="inputArea" style={inputWidth}>
      <h className="inputHeader">{props.label}</h>
      <input
        placeholder={props.placeholder}
        className="inputBox"
        type={props.type}
        value={valor}
        onChange={quandoMudar}
      />
      <div className="inputHelpText">{props.helpText}</div>
    </div>
  );
}
