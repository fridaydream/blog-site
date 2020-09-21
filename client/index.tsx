import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@/pages/App'
import {
  CounterStore,
  ThemeStore
} from '@/store/store'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const initialState = window.__INITIAL__STATE__ || {}
console.log('initialState', initialState.themeStore.theme);

const stores = {
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(initialState.themeStore),
}

const storesContext = React.createContext(stores)

const root = document.getElementById('root')
console.log('client store', stores)
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
const render = (Component: React.ComponentType) => {
  renderMethod(
    <storesContext.Provider value={stores}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </storesContext.Provider>,
    root,
  )
}

render(App)
