import React, { useCallback, useMemo } from 'react'
import { func, shape } from 'prop-types'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'

import { openModal } from '../../actions'
import { secondsToTC } from '../../utilities'

import Thumbnail from '../main/Thumbnail'
import VODLinks from './VODLinks'
import { Play } from '../svg'
import VideoEntryPropTypes from './VideoEntryPropTypes'

const VideoEntry = ({ entry, dispatch }) => {
  const { id, title, tag, trt } = entry

  const openVideo = useCallback(e => {
    e.preventDefault()
    dispatch(openModal(e.currentTarget, entry, 'videos'))
  }, [])

  const runtime = useMemo(() => secondsToTC(trt), [trt])

  return (
    <article>
      <div>
        <h1 aria-level="3">{title}</h1>
        {entry.description.map(txt => <p key={uuid()} dangerouslySetInnerHTML={{ __html: txt }}></p>)}
        {entry.type === 'vod' && <VODLinks title={title} content={entry.content}/>}
      </div>
      <figure>
        <Link
          to={`/videos/${tag}/${id}`}
          title={`Click to Play ${title}`}
          onClick={openVideo}>
          <Thumbnail
            image={tag}
            id={id}
            alt={entry.alt || `A still from ${title}`}
            preloadModalBG />
          <span className="overlay"></span>
          <span className="runtime" aria-hidden="true">{runtime}</span>
          <Play />
        </Link>
      </figure>
    </article>
  )
}

VideoEntry.propTypes = {
  entry: shape(VideoEntryPropTypes).isRequired,
  dispatch: func.isRequired
}

export default VideoEntry
