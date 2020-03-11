import React from 'react'
import { hydrate } from 'react-dom'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
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

const history = createBrowserHistory()

ReactGA.initialize(process.env.GA_ID, {
  testMode: process.env.NODE_ENV === 'development'
})

history.listen(location => {
  ReactGA.pageview(location.pathname)
})

ReactGA.pageview(window.location.pathname)

hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()
