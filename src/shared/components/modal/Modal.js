import React, { useCallback, useContext, useEffect, useRef } from 'react'

if (process.env.WEBPACK) require('../../css/modal.css')

import { CMContext } from '../../store'
import { animateModal, markModalReady, closeModal } from '../../actions'
import { getImageWidth } from '../../utilities'

import ModalContent from './ModalContent'
import Gallery from './content/Gallery'
import Player from './content/Player'

const Modal = ({ pathname }) => {
  const { modal, dispatch } = useContext(CMContext)
  const { ready, width, height, x, y, scale, videoData } = modal
  const modalRef = useRef()
  const transform = `translate(${x}, ${y}) scale(${scale})`
  const backgroundImage = `${[
    'url("',
    'images',
    'render',
    getImageWidth(),
    videoData.id,
    videoData.image
  ].join('/')}")`

  const Content = videoData.type > 0 ? Gallery : Player

  const close = useCallback(e => {
    if (e.target === e.currentTarget) dispatch(closeModal(pathname))
  }, [])

  useEffect(() => {
    modalRef.current.addEventListener('transitionend', () => {
      dispatch(markModalReady())
    }, { once: true })

    setTimeout(() => {
      dispatch(animateModal())
    }, 250)
  }, [])

  return (
    <div id="modal" onClick={close}>
      <div ref={modalRef} style={{ width, height, transform }}>
        <span style={{ backgroundImage }}></span>
        {ready && (
          <ModalContent close={close}>
            <Content videoData={videoData} />
          </ModalContent>
        )}
      </div>
    </div>
  )
}

export default Modal