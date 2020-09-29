import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '@/pages/App'
import { storesContext, CounterStore, ThemeStore } from "@/store/store";

const root = document.getElementById('root')
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

const initialState = window.__INITIAL__STATE__ || {}

console.log('initialState.themeStore', initialState.themeStore);

const themeStore = new ThemeStore(initialState.themeStore)
const counterStore = new CounterStore()

const render = (Component: React.ComponentType) => {
  renderMethod(
    <storesContext.Provider
      value={{
        themeStore,
        counterStore
      }}
    >
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </storesContext.Provider>,
    root,
  )
}

render(App)
