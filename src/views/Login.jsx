import React from "react";
import "./style.css";
import Card from "../components/Card/Card";
import HeadIcon from "../components/HeadIcon/HeadIcon";
import Row from "../components/Row/Row";
import Column from "../components/Column/Column";
import Input from "../components/Input/Input";
import Line from "../components/Line/Line";
import Button from "../components/Button/Button";

// import {
//   Link
// } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <HeadIcon />
      <Card
        titulo="Autenticação"
        InfoText="Faça seu login para acessar o CareIn, aproximando o seu cartão. Caso
          esteja sem o cartão, use os campos Usuário e Senha à direita para
          entrar."
      >
        <Row>
          <Column>
            <div class="gilberto">
              <svg
                id="logo"
                width="90"
                height="68"
                viewBox="0 0 90 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.5 0.25H7.5C3.4125 0.4 0.15 3.6625 0 7.75V60.25C0.15 64.3375 3.4125 67.6 7.5 67.75H82.5C86.5875 67.6 89.85 64.3375 90 60.25V7.75C89.85 3.6625 86.5875 0.4 82.5 0.25ZM82.5 60.25H7.5V7.75H82.5V60.25ZM52.5 52.75V48.0625C52.5 41.8375 39.975 38.6875 33.75 38.6875C27.525 38.6875 15 41.8375 15 48.0625V52.75H52.5ZM33.75 15.25C31.2636 15.25 28.879 16.2377 27.1209 17.9959C25.3627 19.754 24.375 22.1386 24.375 24.625C24.375 25.8561 24.6175 27.0752 25.0886 28.2127C25.5598 29.3501 26.2503 30.3836 27.1209 31.2541C28.879 33.0123 31.2636 34 33.75 34C34.9811 34 36.2002 33.7575 37.3377 33.2864C38.4751 32.8152 39.5086 32.1247 40.3791 31.2541C41.2497 30.3836 41.9402 29.3501 42.4114 28.2127C42.8825 27.0752 43.125 25.8561 43.125 24.625C43.125 23.3939 42.8825 22.1748 42.4114 21.0373C41.9402 19.8999 41.2497 18.8664 40.3791 17.9959C39.5086 17.1253 38.4751 16.4348 37.3377 15.9636C36.2002 15.4925 34.9811 15.25 33.75 15.25ZM52.5 15.25V19H75V15.25H52.5ZM52.5 22.75V26.5H75V22.75H52.5ZM52.5 30.25V34H67.5V30.25H52.5Z"
                  fill="#469D89"
                />
              </svg>
              <p class="paragrafo">Aproxime o cartão da leitor</p>
            </div>
          </Column>
          <Line />
          <Column>
            <Input
              label="Usuário"
              // placeholder="Insira seu nome de usuário"
              helpText=""
              type="text"
            />
            <Input
              label="Senha"
              // placeholder="Insira sua senha"
              helpText=""
              type="password"
            />
            <Button buttonName="Entrar" link="/adicionarPaciente" />
          </Column>
        </Row>
      </Card>
    </div>
  );
}
