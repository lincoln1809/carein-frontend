import React, { useState } from "react";
import "./style.css";
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
  const [CPF, setCPF] = useState("-");
  const [entryTime, setEntryTime] = useState("-");
  const [visitReason, setVisitReason] = useState("-");
  const [physicalDisability, setPhysicalDisability] = useState("-");
  const [medicine, setMedicine] = useState("-");
  const [companionName, setCompanionName] = useState("-");
  const [companionAge, setCompanionAge] = useState("-");
  const [companionCPF, setCompanionCPF] = useState("-");

  return (
    <div class="alfa">
      <HeadIcon />
      <Card titulo="Adicionar Paciente">
        <Row>
          <Column>
            <div className="ColTitle">Dados do Paciente</div>
            <div className="ColSubTitle">Insira os dados do paciente</div>
            <Input
              label="Nome Completo"
              type="text"
              value={pacientName}
              onChange={(e) => setPacientName()}
            />
            <Row>
              <Input
                label="Idade"
                width="25%"
                type="text"
                value={age}
                onChange={(e) => setAge()}
              />
              <Input
                label="CPF"
                type="text"
                value={CPF}
                onChange={(e) => setCPF()}
              />
            </Row>
            <Input
              label="Horário de entrada"
              type="datetime-local"
              value={entryTime}
              onChange={(e) => setEntryTime()}
            />
            <Input
              label="Motivo da visita"
              type="text"
              value={visitReason}
              onChange={(e) => setVisitReason()}
            />
            <Input
              label="Portador de alguma deficiência física?"
              type="text"
              value={physicalDisability}
              onChange={(e) => setPhysicalDisability()}
            />
            <Input
              label="Toma algum remédio?"
              type="text"
              value={medicine}
              onChange={(e) => setMedicine()}
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
              value={companionName}
              onChange={(e) => setCompanionName()}
            />
            <Row>
              <Input
                label="Idade"
                width="25%"
                type="text"
                value={companionAge}
                onChange={(e) => setCompanionAge()}
              />
              <Input
                label="CPF"
                type="text"
                value={companionCPF}
                onChange={(e) => setCompanionCPF()}
              />
            </Row>
            <Row>
              <TextButton
                link="/menu"
                textButtonName="Cancelar e retornar ao menu"
              />
              <Button buttonName="Concluir Cadastro" link="/menu" />
            </Row>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
