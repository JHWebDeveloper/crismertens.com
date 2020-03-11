import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { func, number, shape, string } from 'prop-types'

import { openModal } from '../../actions'
import { getImageWidth } from '../../utilities'

import { Play } from '../svg'
import { secondsToTC } from '../../utilities'
import VideoEntryPropTypes from '../videos/VideoEntryPropTypes'

const Feature = props => {
  const {
    entry,
    extendState,
    retractState,
    featuredCurrent,
    setFeaturedCurrent,
    countFeaturedLoaded,
    dispatch
  } = props

  let { featuredLoaded } = props

  const { id, altTitle, title, tag, trt } = entry

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
    if (window.matchMedia('hover: none')) return
    if (featuredCurrent !== extendState) e.preventDefault()
    setFeaturedCurrent(extendState)
  }, [featuredCurrent])

  const openVideo = useCallback(e => {
    e.preventDefault()
    dispatch(openModal(e.currentTarget, entry, 'reel'))
  }, [])

  const runtime = useMemo(() => secondsToTC(trt), [trt])

  const ref = useRef()

  useEffect(() => {
    ref.current.addEventListener('touchstart', openModalOnSecondTouch)

    return () => {
      ref.current.removeEventListener('touchstart', openModalOnSecondTouch)
    }
  }, [featuredCurrent])

  return (
    <Link
      to={`/reel/${tag}/${id}`}
      title={`Click to play ${title}`}
      className={getClass()}
      ref={ref}
      onMouseEnter={() => setFeaturedCurrent(extendState)}
      onMouseLeave={() => setFeaturedCurrent(0)}
      onFocus={() => setFeaturedCurrent(extendState)}
      onBlur={() => setFeaturedCurrent(0)}
      onClick={openVideo}>
      <span className="crop-box">
        <img
          src={`/images/render/${getImageWidth()}/${id}/${tag}`}
          alt={`A still from ${altTitle || title}`}
          onLoad={() => countFeaturedLoaded(featuredLoaded += 1)}/>
        <span className="overlay"></span>
        <Play />
        <h2>{title}</h2>
        <span className="runtime">{runtime}</span>
      </span>
    </Link>
  )
}

Feature.propTypes = {
  entry: shape(VideoEntryPropTypes).isRequired,
  extendState: number.isRequired,
  retractState: number.isRequired,
  featuredCurrent: number.isRequired,
  setFeaturedCurrent: func.isRequired,
  featuredLoaded: number.isRequired,
  countFeaturedLoaded: func.isRequired,
  dispatch: func.isRequired
}

export default Feature
