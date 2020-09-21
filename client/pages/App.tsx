import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store/store'
import Routes from '@/config/router'

const App = observer(() => {
  const {
    themeStore,
  } = useStore();
  return (
    <div>
      <Link to="/home">
        首页
      </Link>
      <Link to="/user">
        用户页
      </Link>
      <Routes />
      {
        themeStore.theme
      }
      <div onClick={() => themeStore.setThemeColor('dark')}>
        改变主题
      </div>

    </div>
  )
})

export default hot(App)
