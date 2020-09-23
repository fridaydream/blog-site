import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Routes from '@/config/router'

const App = observer(() => {
  return (
    <div>
      <Link to="/home">
        首页
      </Link>
      <Link to="/user">
        用户页
      </Link>
      <Routes />
    </div>
  )
})

export default hot(App)
