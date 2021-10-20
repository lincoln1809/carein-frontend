import "./Input.css";
import React, { useEffect, useState } from "react";

export default function Input(props) {
  const inputWidth = {
    width: props.width || "100%",
  };
  const [valor, setValor] = useState("");
  useEffect(
    function () {
      props.getValue(valor);
    },
    [valor]
  );
  return (
    <div className="inputArea" style={inputWidth}>
      <h1 className="inputHeader">{props.label}</h1>
      <input
        placeholder={props.placeholder}
        className="inputBox"
        type={props.type}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <div className="inputHelpText">{props.helpText}</div>
    </div>
  );
}
