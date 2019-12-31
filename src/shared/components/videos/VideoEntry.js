import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'

import { openModal } from '../../actions'

import VODLinks from './VODLinks'
import LazyLoadImage from './LazyLoadImage'
import { Play } from '../svg'

import { secondsToTC } from '../../utilities'

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
        {entry.description.map(txt => (
          <p key={uuid()} dangerouslySetInnerHTML={{ __html: txt }}></p>
        ))}
        {entry.type === 'vod' && <VODLinks title={title} content={entry.content}/>}
      </div>
      <figure>
        <Link
          to={`/videos/${tag}/${id}`}
          title={`Click to Play ${title}`}
          onClick={openVideo}>
          <LazyLoadImage
            image={tag}
            id={id}
            alt={`A still from ${entry.altTitle || title}`}
            desktopWidth={480} />
          <LazyLoadImage
            image={tag}
            id={id}
            alt={`A still from ${entry.altTitle || title}`} />
          <span className="overlay"></span>
          <span className="runtime" aria-hidden="true">{runtime}</span>
          <Play />
        </Link>
      </figure>
    </article>
  )
}

export default VideoEntry