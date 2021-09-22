import React from "react";
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
  return (
    <div class="alfa">
      <HeadIcon />
      <Card titulo="Adicionar Paciente">
        <Row>
          <Column>
            <div className="ColTitle">Dados do Paciente</div>
            <div className="ColSubTitle">Insira os dados do paciente</div>
            <Input label="Nome Completo" type="text"></Input>
            <Row>
              <Input label="Idade" width="25%" type="text"></Input>
              <Input label="CPF" type="text"></Input>
            </Row>
            <Input label="Horário de entrada" type="datetime-local"></Input>
            <Input label="Motivo da visita" type="text"></Input>
            <Input
              label="Portador de alguma deficiência física?"
              type="text"
            ></Input>
            <Input label="Toma algum remédio?" type="text"></Input>
          </Column>
          <Line></Line>
          <Column>
            <div className="ColTitle">Dados do Acompanhante</div>
            <div className="ColSubTitle">
              Insira os dados do acompanhante, caso exista.
            </div>
            <Input label="Nome Completo" type="text"></Input>
            <Row>
              <Input label="Idade" width="25%" type="text"></Input>
              <Input label="CPF" type="text"></Input>
            </Row>
            <Row>
              <TextButton
                link="/menu"
                textButtonName="Cancelar e retornar ao menu"
              />
              <Button buttonName="Concluir Cadastro" />
            </Row>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
