import React, { useContext } from 'react'
import CounterStore from './counter-store'
import ThemeStore from './theme-store'

export {
  CounterStore,
  ThemeStore
}

export const stores = {
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
}

export const createStoreMap = () => (stores)

export const storesContext = React.createContext(stores)

// store数据
export const useStore = () => {
  const store = useContext(storesContext)
  return store;
}
