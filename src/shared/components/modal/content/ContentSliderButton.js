import React from 'react'
import { Transition } from 'react-transition-group'

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered:  { transform: 'scale(1)' },
  exiting:  { transform: 'scale(0)' },
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
        style={{ ...transitionStyles[state] }}>
        { children }
      </button>
    )}
  </Transition>
)

export default ContentSliderButton