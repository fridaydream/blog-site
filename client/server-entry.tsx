import React from 'react'
import { StaticRouterContext } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import { useStaticRendering } from 'mobx-react-lite'
import { GenerateId, Jss } from 'jss';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';

import App from '@/pages/App'
import { createStoreMap, storesContext } from "@/store/store";
import { IStores } from "@/store/types";
import { theme } from './theme'

// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true) // 使用静态的渲染

export default (stores: IStores, sheetsRegistry: {}, sheetsManager: {}, jss: Jss, generateClassName: GenerateId, routerContext: StaticRouterContext, url: string) => (
  <storesContext.Provider value={stores}>
    <StaticRouter context={routerContext} location={url}>
      <StylesProvider sheetsRegistry={sheetsRegistry} jss={jss} generateClassName={generateClassName} sheetsManager={sheetsManager}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </StaticRouter>
  </storesContext.Provider>
)

export { createStoreMap }
