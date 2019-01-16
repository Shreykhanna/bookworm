import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PropTypes from 'prop-types'
import Homepage  from './component/pages/Homepage'
import Loginpage from './component/pages/Loginpage'
import SignUpPage from './component/pages/SignupPage'
import DashboardPage from './component/pages/DashboardPage'
import ConfirmationPage from './component/pages/ConfirmationPage'
import UserRoute from './component/routes/UserRoutes'
import GuestRoute from './component/routes/GuestRoute'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App= ()=>(
      <div className="ui container">
      <Route        exact path="/"           component = {Homepage}/>
      <Route        exact path="/confirmation/:token" component={ConfirmationPage} />
      <GuestRoute   exact path="/login"      component = {Loginpage}/>
      <GuestRoute   exact path="/signup"     component=  {SignUpPage}/>
      <UserRoute    exact path="/dashboard"  component =  {DashboardPage}/>
      </div>
);

export default App;
