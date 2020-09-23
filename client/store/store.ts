import React from 'react'
import CounterStore from './counter-store'
import ThemeStore from './theme-store'
import { IStores } from './types'

declare global {
  interface Window {
    __INITIAL__STATE__: IStores;
  }
}

export {
  CounterStore,
  ThemeStore
}

export const stores = {
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
}

let renderStores = stores
// 浏览器中生产包才需要重新赋值
if (typeof window !== 'undefined' && window.__INITIAL__STATE__) {
  renderStores = window.__INITIAL__STATE__
}

export const storesContext = React.createContext(renderStores)

export const createStoreMap = () => (stores)
