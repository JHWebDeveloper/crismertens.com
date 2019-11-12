import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import { CMContext } from '../../store'
import Modal from './Modal'

const ModalLoader = withRouter(({ location }) => {
  const { open } = useContext(CMContext).modal;
  const pathname = location.pathname.split('/')[1]

  return open && <Modal pathname={pathname} />
})

export default ModalLoader