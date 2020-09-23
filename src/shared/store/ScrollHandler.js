import React, { createContext } from 'react'
import { arrayOf, element, oneOfType } from 'prop-types'

const lazyLoader = process.env.WEBPACK ? (
	new IntersectionObserver((entries, observer) => {
		entries.forEach(({ intersectionRatio, target }) => {
			if (intersectionRatio > 0) {
				target.src = target.dataset.src
				target.removeAttribute('data-src')
				observer.unobserve(target)
			}
		})
	})
) : false

export const ScrollHandlerContext = createContext()

export const ScrollHandlerProvider = ({ children }) => (
	<ScrollHandlerContext.Provider value={{ lazyLoader }}>
		{ children }
	</ScrollHandlerContext.Provider>
)

ScrollHandlerProvider.propTypes = {
	children: oneOfType([element, arrayOf(element)]).isRequired
}
