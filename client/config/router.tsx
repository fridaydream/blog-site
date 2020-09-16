import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import Home from '../pages/home/Index'
import User from '../pages/user/Index'

export default () => (
  <>
    <Route path="/" render={() => <Redirect to="/home" />} exact />
    <Route path="/home" component={Home} />
    <Route path="/user" component={User} />
  </>
)
