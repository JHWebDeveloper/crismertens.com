import React, { useContext } from 'react'
import { Transition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import { object } from 'prop-types'

import { CMContext } from '../../store'
import Modal from './Modal'

const transitionStyles = {
  exiting: {
    opacity: 0,
    transition: 'opacity 200ms'
  }
}

const ModalLoader = withRouter(({ location }) => {
  const { modal, dispatch } = useContext(CMContext)
  const pathname = location.pathname.split('/')[1]

  return (
    <Transition
      in={modal.open}
      timeout={{ exit: 200 }}
      mountOnEnter
      unmountOnExit>
      {state => (
        <Modal
          pathname={pathname}
          styles={{ ...transitionStyles[state] }}
          modal={modal}
          dispatch={dispatch} />
      )}
    </Transition>
  )
})

ModalLoader.propTypes = {
  location: object
}

export default ModalLoader
