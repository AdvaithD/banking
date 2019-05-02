import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'

const Router = ({ onLogin, user }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={Signup}/>
      <Route path='/login' render={ () => <Login onLogin={onLogin} />} />
      <Route path='/app' render={ () => <Dashboard user={user}/>} />

    </Switch>
  </BrowserRouter>
)
export default Router
