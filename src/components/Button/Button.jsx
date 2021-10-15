import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.link}>
      <input className="Button" type="submit" value={props.buttonName} />
    </Link>
  );
}
