import React, { useState } from "react";
import "./style.css";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

// import {
//   Link
// } from 'react-router-dom';

export default function Teste() {
  const [name, setName] = useState("-");

  function getInfo(nome) {
    setName(nome);
  }

  return (
    <div className="alfa">
      <Input label="Nome Completo" type="text" quandoMudar={getInfo} />
      <div>{name}</div>
      <Button />
    </div>
  );
}
