import React from "react";
import "./Column.css";

export default function Column(props) {
  return <div className="Col">{props.children}</div>;
}
