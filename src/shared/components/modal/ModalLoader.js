import React, { useContext } from 'react'
import { Transition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

import { CMContext } from '../../store'
import Modal from './Modal'

const transitionStyles = {
  exiting: {
    opacity: 0,
    transition: 'opacity 200ms'
  }
}

const ModalLoader = withRouter(({ location }) => {
  const { open } = useContext(CMContext).modal;
  const pathname = location.pathname.split('/')[1]

  return (
    <Transition
      in={open}
      timeout={{ exit: 200 }}
      mountOnEnter
      unmountOnExit>
      {state => (
        <Modal pathname={pathname} styles={{ ...transitionStyles[state] }}/>
      )}
    </Transition>
  )
})

export default ModalLoader