import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/components/main/App'
import smoothscroll from 'smoothscroll-polyfill'
import focusWithin from 'focus-within'


smoothscroll.polyfill()

document.body.onkeydown = function (e) {
  if (e.keyCode !== 9) return

  focusWithin(document)
  
  this.className = 'accessible'
  this.onkeydown = false
}

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()