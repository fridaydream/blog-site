import React from 'react'
import { StaticRouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import App from './pages/App'

export default (routerContext: StaticRouterContext, url: string) => (
  <StaticRouter context={routerContext} location={url}>
    <App />
  </StaticRouter>
)
