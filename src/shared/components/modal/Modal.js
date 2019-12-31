import React, { useCallback, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'

if (process.env.WEBPACK) require('../../css/modal.css')

import { animateModal, markModalReady, closeModal, closeEpisode } from '../../actions'
import { getImageWidth, transitionProps } from '../../utilities'

import ModalContent from './ModalContent'
import Gallery from './content/Gallery'
import Player from './content/Player'

const Modal = ({ pathname, styles, modal, dispatch }) => {
  const { ready, x, y, scale, videoData, episode, episodeId } = modal
  const { type, id } = videoData
  const modalRef = useRef()
  const transform = `translate(${x}, ${y}) scale(${scale})`
  const animation = pathname === 'videos' ? 'zoom-out 300ms' : 'none'
  const backgroundImage = `${[
    'url("',
    'images',
    'render',
    getImageWidth(),
    videoData.id,
    videoData.tag
  ].join('/')}")`

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: {
      opacity: 1,
      transitionDelay: '350ms'
    },
    exiting: {
      opacity: type === 'series' ? 0 : 1,
    }
  }

  const close = useCallback(() => {
    dispatch(closeModal(pathname, id))
  }, [])

  const closeWithTarget = useCallback(e => {
    if (e.target === e.currentTarget) {
      e.preventDefault()
      close()
    }
  }, [])

  const closeOnKeyDown = useCallback(e => {
    if (e.keyCode === 13 ||
        e.keyCode === 32 ||
        e.keyCode === 9  && e.shiftKey) closeWithTarget(e)

    if (e.keyCode === 27) close()
  }, [])

  useEffect(() => {
    modalRef.current.parentElement.focus()

    modalRef.current.addEventListener('transitionend', () => {
      dispatch(markModalReady())
    }, { once: true })

    setTimeout(() => {
      dispatch(animateModal())
    }, 250)

    window.onpopstate = close
    document.body.classList.add('noscroll')
    document.body.ontouchstart = e => {
      e.preventDefault()
    }

    return () => {
      document.body.classList.remove('noscroll')
      document.body.ontouchstart = window.onpopstate = false
    }
  }, [])

  return (
    <div
      id="modal"
      onClick={closeWithTarget}
      style={styles}
      tabIndex={0}
      onKeyDown={closeOnKeyDown}>
      <div ref={modalRef} style={{ transform }}>
        <span>
          <span
            className="modal-bg"
            style={{ backgroundImage, animation }}></span>
        </span>
        <ModalContent
          closeWithTarget={closeWithTarget}
          ready={ready}
          episode={episode}
          closeEpisode={() => dispatch(closeEpisode(episodeId))}>
          <Transition
            in={ready && type !== 'video'}
            timeout={0}
            {...transitionProps}>
            {state => (
              <Gallery
                videoData={videoData}
                styles={transitionStyles[state]}
                dispatch={dispatch}
                pathname={pathname} />
            )}
          </Transition>
          <Transition
            in={ready && (type === 'video' || episode)}
            timeout={{ exit: 350 }}
            {...transitionProps}>
            {state => (
              <Player
                videoData={videoData}
                episodeId={modal.episodeId}
                styles={transitionStyles[state]}
                dispatch={dispatch}
                closeModal={close} />
            )}
          </Transition>
        </ModalContent>
      </div>
    </div>
  )
}

export default Modal