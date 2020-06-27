import React from 'react'
import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader';

import App from './App'
const root = document.getElementById('root')
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
const render = (Component: React.ComponentType) => {
  renderMethod(<Component />, root)
}

render(App)

// // 热更新
// if (module.hot) {
//   module.hot.accept('./App.tsx', () => {
//     const NextApp = require('./App.tsx').default;
//     render(NextApp);
//   });
// }
