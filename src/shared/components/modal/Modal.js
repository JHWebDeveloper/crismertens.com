import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'

if (process.env.WEBPACK) require('../../css/modal.css')

import { CMContext } from '../../store'
import { animateModal, markModalReady, closeModal, closeEpisode } from '../../actions'
import { getImageWidth, transitionProps } from '../../utilities'

import ModalContent from './ModalContent'
import Gallery from './content/Gallery'
import Player from './content/Player'

const Modal = ({ pathname, styles }) => {
  const { modal, dispatch } = useContext(CMContext)
  const { ready, x, y, scale, videoData, episode } = modal
  const { type } = videoData
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

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: {
      opacity: 1,
      transitionDelay: '350ms'
    },
    exiting: {
      opacity: type === 2 ? 0 : 1,
    }
  }

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

    document.body.classList.add('noscroll')
    document.body.ontouchstart = e => {
      e.preventDefault()
    }

    return () => {
      document.body.classList.remove('noscroll')
      document.body.ontouchstart = false
    }
  }, [])

  return (
    <div id="modal" onClick={close} style={styles}>
      <div ref={modalRef} style={{ transform }}>
        <span style={{ backgroundImage }}></span>
          <ModalContent
            close={close}
            ready={ready}
            episode={episode}
            closeEpisode={() => dispatch(closeEpisode())}>
            <Transition
              in={type > 0}
              timeout={{ enter: 500 }}
              {...transitionProps}>
              {state => (
                <Gallery
                  videoData={videoData}
                  styles={transitionStyles[state]} />
              )}
            </Transition>
            <Transition
              in={type === 0 || episode}
              timeout={{
                enter: 500,
                exit: 350
              }}
              {...transitionProps}>
              {state => (
                <Player
                  videoData={videoData}
                  episodeNumber={modal.episodeNumber}
                  styles={transitionStyles[state]}
                  dispatch={dispatch} />
              )}
            </Transition>
          </ModalContent>
      </div>
    </div>
  )
}

export default Modal