import "./Button.css";
import React from "react";

export default function Button(props) {
  return <input className="Button" type="submit" value={props.buttonName} />;
}
