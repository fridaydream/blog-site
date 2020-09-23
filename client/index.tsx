import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@/pages/App'

const root = document.getElementById('root')
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
const render = (Component: React.ComponentType) => {
  renderMethod(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    root,
  )
}

render(App)
