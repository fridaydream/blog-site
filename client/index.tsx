import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader";

import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App)

// 热更新
if (module.hot) {
  module.hot.accept('./App.tsx', () => {
    const NextApp = require('./App.tsx').default;
    render(NextApp);
  });
}
