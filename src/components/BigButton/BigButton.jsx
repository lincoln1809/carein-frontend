import "./BigButton.css";
import React from "react";

import { Link } from "react-router-dom";

export default function BigButton(props) {
  return (
    <Link to={props.link}>
      <div className="BigButtonCard">
        <div className="BigButtonTitle">{props.titulo}</div>
        <div className="BigButtonContent">
          <div classname="BigButtonIcon">{props.children}</div>
        </div>
      </div>
    </Link>
  );
}
