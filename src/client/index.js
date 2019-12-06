import React from 'react';
import ReactDom from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createClientStore } from '../shared/store/index'

const store = createClientStore()
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)