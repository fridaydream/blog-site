import React from 'react'
import { observer } from 'mobx-react-lite'

import {
  useStores,
} from '@/store/use-stores'

export const Home = observer(() => {
  const { themeStore } = useStores()

  return (
    <>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme('light')}>
        set theme: light
      </button>
      <button onClick={() => themeStore.setTheme('dark')}>
        set theme: dark
      </button>
    </>
  )
})

export default Home
