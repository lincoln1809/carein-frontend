import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "../views/Menu";
import Login from "../views/Login";
import AdicionarPaciente from "../views/AdicionarPaciente";
import Teste from "../views/Teste";

const Content = (props) => (
  <main className="Content">
    <Switch>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/adicionarPaciente">
        <AdicionarPaciente />
      </Route>
      <Route path="/teste">
        <Teste />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </main>
);

export default Content;
