import "./TextButton.css";
import React from "react";

export default function TextButton(props) {
  return (
    <input className="TextButton" type="button" value={props.textButtonName} />
  );
}
