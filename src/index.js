import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('app')
  )

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }
})
