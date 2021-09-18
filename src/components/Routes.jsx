import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from '../views/Menu'
import Login from '../views/Login'
import NovoPaciente from '../views/NovoPaciente'

const Content = props => (
  <main className="Content">
    <Switch>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/cadastrarPaciente">
        <NovoPaciente />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </main>
)

export default Content