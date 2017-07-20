import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('app')
  )

  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
})
