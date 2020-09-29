import React from 'react'
import { observer } from 'mobx-react-lite'
import Helmet from 'react-helmet'

import {
  useStores,
} from '@/store/use-stores'

export const Home = () => {
  const { themeStore } = useStores()

  return (
    <>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme('light')}>
        set theme: light
      </button>
      <button onClick={() => themeStore.setTheme('dark')}>
        set theme: dark
      </button>
    </>
  )
}

export default observer(Home)
