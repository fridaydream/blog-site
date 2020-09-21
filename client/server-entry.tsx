import React from 'react'
import { StaticRouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import { useStaticRendering } from 'mobx-react-lite'
import App from '@/pages/App'
import { createStoreMap, storesContext } from "@/store/store";
import { IStores } from "@/store/types";

useStaticRendering(true)

export default (stores: IStores, routerContext: StaticRouterContext, url: string) => (
  <storesContext.Provider value={stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </storesContext.Provider>
)

export { createStoreMap }
