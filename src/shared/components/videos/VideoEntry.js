import React, { useCallback, useContext, memo } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'

import { CMContext } from '../../store'
import { openModal } from '../../actions'

import VODLinks from './VODLinks'
import LazyLoadImage from './LazyLoadImage'
import { Play } from '../svg'

import { secondsToTC } from '../../utilities'

const VideoEntry = memo(({ entry }) => {
  const { id, title, image } = entry
  const { dispatch } = useContext(CMContext)

  const openVideo = useCallback(e => {
    e.preventDefault()
    dispatch(openModal(e.currentTarget, entry, 'videos'))
  }, [])

  return (
    <article>
      <div>
        <h1 aria-level="3">{title}</h1>
        {entry.description.map(txt => (
          <p key={uuid()} dangerouslySetInnerHTML={{ __html: txt }}></p>
        ))}
        {entry.type === 1 && <VODLinks title={title} content={entry.content}/>}
      </div>
      <figure>
        <Link
          to={`/videos/${image}/${id}`}
          title={`Click to Play ${title}`}
          onClick={openVideo}>
          <LazyLoadImage
            image={image}
            id={id}
            alt={`A still from ${entry.altTitle || title}`}
            desktopWidth={480} />
          <LazyLoadImage
            image={image}
            id={id}
            alt={`A still from ${entry.altTitle || title}`} />
          <span className="overlay"></span>
          <span className="runtime" aria-hidden="true">{secondsToTC(entry.trt)}</span>
          <Play />
        </Link>
      </figure>
    </article>
  )
})

export default VideoEntry