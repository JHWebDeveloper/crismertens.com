import React from 'react'
import { bool, element, func, string } from 'prop-types'
import { Transition } from 'react-transition-group'

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0)' }
}

const ContentSliderButton = ({ enabled, buttonTitle, buttonAction, children }) => (
  <Transition
    in={enabled}
    timeout={{ exit: 300 }}
    mountOnEnter
    unmountOnExit>
    {state => (
      <button
        title={buttonTitle}
        onClick={buttonAction}
        style={{ ...transitionStyles[state] }}
        tabIndex="-1">
        { children }
      </button>
    )}
  </Transition>
)

ContentSliderButton.propTypes = {
  enabled: bool.isRequired,
  buttonTitle: string.isRequired,
  buttonAction: func.isRequired,
  children: element.isRequired
}

export default ContentSliderButton