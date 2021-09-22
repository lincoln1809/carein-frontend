import "./TextButton.css";
import React from "react";

import { Link } from "react-router-dom";

export default function TextButton(props) {
  return (
    <Link className="link" to={props.link}>
      <input
        className="TextButton"
        type="button"
        value={props.textButtonName}
      />
    </Link>
  );
}
