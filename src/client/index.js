import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/components/main/App'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()