import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { CMContext } from '../../store'
import { setFeaturedCurrent, incrementFeaturedLoaded, openModal } from '../../actions'

import Thumbnail from '../main/Thumbnail'
import { Play } from '../svg'
import { secondsToTC } from '../../utilities'

const Feature = ({ entry, extendState, retractState, displayTitle }) => {
  const { id, altTitle, title, image, trt } = entry
  const { featuredCurrent, featuredLoaded, dispatch } = useContext(CMContext)

  const getClass = useCallback(() => {
    switch (featuredCurrent) {
      case extendState:
        return 'extend'
      case retractState:
        return 'retract'
      default:
        return ''
    }
  }, [featuredCurrent])

  const openModalOnSecondTouch = useCallback(e => {
    if (featuredCurrent !== extendState) e.preventDefault()
    dispatch(setFeaturedCurrent(extendState))
  }, [featuredCurrent])

  const openVideo = useCallback(e => {
    e.preventDefault()
    dispatch(openModal(e.currentTarget, entry, 'reel'))
  }, [])

  const ref = useRef()

  useEffect(() => {
    ref.current.addEventListener('touchstart', openModalOnSecondTouch)

    return () => {
      ref.current.removeEventListener('touchstart', openModalOnSecondTouch)
    }
  }, [featuredCurrent])

  return (
    <Link
      to={`/reel/${image}/${id}`}
      title={`Click to play ${title}`}
      className={getClass()}
      ref={ref}
      onMouseEnter={() => dispatch(setFeaturedCurrent(extendState))}
      onMouseLeave={() => dispatch(setFeaturedCurrent(0))}
      onFocus={() => dispatch(setFeaturedCurrent(extendState))}
      onBlur={() => dispatch(setFeaturedCurrent(0))}
      onClick={openVideo}>
      <span className="crop-box">
        <Thumbnail
          image={image}
          id={id}
          alt={`A still from ${altTitle || title}`}
          loadAction={() => dispatch(incrementFeaturedLoaded(featuredLoaded))}/>
        <span className="overlay"></span>
        <Play />
        <h2>{displayTitle}</h2>
        <span className="runtime">{secondsToTC(trt)}</span>
      </span>
    </Link>
  )
}

export default Feature