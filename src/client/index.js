import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import smoothscroll from 'smoothscroll-polyfill'
import focusWithin from 'focus-within'
import App from '../shared/components/main/App'

const history = createBrowserHistory()

function initGoogleAnalytics() {
	ReactGA.initialize(process.env.GA_ID, {
		testMode: process.env.NODE_ENV === 'development'
	})
	
	history.listen(location => {
		ReactGA.pageview(location.pathname)
	})
	
	ReactGA.pageview(location.pathname)
}

function enableFocusRings() {
	document.body.onkeydown = function (e) {
		if (e.keyCode !== 9) return
	
		focusWithin(document)
		
		this.className = 'accessible'
		this.onkeydown = false
	}
}

function loadIE11Styles() {
	const ie11Styles = document.createElement('link')
	const mainStyles = document.querySelector('link')

	ie11Styles.rel  = 'stylesheet'
	ie11Styles.href = '/css/ie11.min.css'

	document.head.insertBefore(ie11Styles, mainStyles.nextElementSibling)
}

function init() {
	smoothscroll.polyfill()
	initGoogleAnalytics()
	enableFocusRings()

	if (!!window.MSInputMethodContext && !!document.documentMode) {
		loadIE11Styles()
	}
}

init()

hydrate(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
)

if (module.hot) module.hot.accept()
