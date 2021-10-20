import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.link}>
      <button className="Button" type="submit">
        {props.buttonName}
      </button>
    </Link>
  );
}
