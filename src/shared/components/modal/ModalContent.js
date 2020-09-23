import React from 'react'
import { arrayOf, bool, element, func, oneOfType } from 'prop-types'
import { Transition } from 'react-transition-group'
import { transitionProps } from '../../utilities'

const closeStyles = {
	entering: { transform: 'translateY(0)' },
	entered: { transform: 'translateY(-118%)' }
}

const backStyles = {
	entering: { transform: 'translateY(0)' },
	entered: { transform: 'translateY(118%)' },
	exiting: { transform: 'translateY(0)' }
}

const ModalContent = ({ closeWithTarget, ready, episode, closeEpisode, children }) => (
	<>
		<Transition
			in={ready}
			timeout={0}
			{...transitionProps}>
			{state => (
				<button
					onClick={closeWithTarget}
					title="Close"
					style={{ ...closeStyles[state] }}>CLOSE</button>
			)}
		</Transition>
		{ children }
		<Transition
			in={episode}
			timeout={{ exit: 300 }}
			{...transitionProps}>
			{state => (
				<button
					onClick={closeEpisode}
					title="Back"
					style={{ ...backStyles[state] }}
					autoFocus>BACK</button>
			)}
		</Transition>
	</>
)

ModalContent.propTypes = {
	closeWithTarget: func.isRequired,
	ready: bool.isRequired,
	episode: bool,
	closeEpisode: func,
	children: oneOfType([element, arrayOf(element)]).isRequired
}

export default ModalContent
