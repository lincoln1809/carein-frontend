import React, { useState } from "react";
import "./style.css";
import "../components/Button/Button.css";
import Card from "../components/Card/Card";
import HeadIcon from "../components/HeadIcon/HeadIcon";
import Row from "../components/Row/Row";
import Column from "../components/Column/Column";
import Input from "../components/Input/Input";
import Line from "../components/Line/Line";
import Button from "../components/Button/Button";
import TextButton from "../components/TextButton/TextButton";

// import {
//   Link
// } from 'react-router-dom';

export default function NovoPaciente() {
  const [pacientName, setPacientName] = useState("-");
  const [age, setAge] = useState("-");
  const [cpf, setCpf] = useState("-");
  const [entryTime, setEntryTime] = useState("-");
  const [visitReason, setVisitReason] = useState("-");
  const [physicalDisability, setPhysicalDisability] = useState("-");
  const [medicine, setMedicine] = useState("-");
  const [companionName, setCompanionName] = useState("-");
  const [companionAge, setCompanionAge] = useState("-");
  const [companionCpf, setCompanionCpf] = useState("-");

  function getValuePacientName(value) {
    setPacientName(value);
  }
  function getValueAge(value) {
    setAge(value);
  }
  function getValueCpf(value) {
    setCpf(value);
  }
  function getValueEntryTime(value) {
    setEntryTime(value);
  }
  function getValueVisitReason(value) {
    setVisitReason(value);
  }
  function getValuePhysicalDisability(value) {
    setPhysicalDisability(value);
  }
  function getValueMedicine(value) {
    setMedicine(value);
  }
  function getValueCompanionName(value) {
    setCompanionName(value);
  }
  function getValueCompanionAge(value) {
    setCompanionAge(value);
  }
  function getValueCompanionCpf(value) {
    setCompanionCpf(value);
  }

  return (
    <div className="alfa">
      <HeadIcon />
      <Card titulo="Adicionar Paciente">
        <Row>
          <Column>
            <div className="ColTitle">Dados do Paciente</div>
            <div className="ColSubTitle">Insira os dados do paciente</div>
            <Input
              label="Nome Completo"
              type="text"
              getValue={getValuePacientName}
            />
            <div>{pacientName}</div>
            <Row>
              <Input
                label="Idade"
                width="25%"
                type="text"
                getValue={getValueAge}
              />
              <Input label="CPF" type="text" getValue={getValueCpf} />
            </Row>
            <Input
              label="Horário de entrada"
              type="datetime-local"
              getValue={getValueEntryTime}
            />
            <Input
              label="Motivo da visita"
              type="text"
              getValue={getValueVisitReason}
            />
            <Input
              label="Portador de alguma deficiência física?"
              type="text"
              getValue={getValuePhysicalDisability}
            />
            <Input
              label="Toma algum remédio?"
              type="text"
              getValue={getValueMedicine}
            />
          </Column>
          <Line></Line>
          <Column>
            <div className="ColTitle">Dados do Acompanhante</div>
            <div className="ColSubTitle">
              Insira os dados do acompanhante, caso exista.
            </div>
            <Input
              label="Nome Completo"
              type="text"
              getValue={getValueCompanionName}
            />
            <Row>
              <Input
                label="Idade"
                width="25%"
                type="text"
                getValue={getValueCompanionAge}
              />
              <Input label="CPF" type="text" getValue={getValueCompanionCpf} />
            </Row>
            <Row>
              <TextButton
                link="/menu"
                textButtonName="Cancelar e retornar ao menu"
              />
              <button className="Button">Concluir Cadastro</button>
            </Row>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
