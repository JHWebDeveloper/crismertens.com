import React from 'react'

import { playEpisode, changeDisplayedTitle } from '../../../actions'

import Thumbnail from '../../main/Thumbnail'
import { Play } from '../../svg'

const Episode = ({ title, tag, id, dispatch }) => (
  <button
    data-title={title}
    title={`Click to play ${title}`}
    id={id}
    onClick={() => dispatch(playEpisode(id))}
    onMouseEnter={() => dispatch(changeDisplayedTitle(title))}
    onMouseLeave={() => dispatch(changeDisplayedTitle())}
    onFocus={() => dispatch(changeDisplayedTitle(title))}
    onBlur={() => dispatch(changeDisplayedTitle())}>
    <span>
      <Thumbnail
        image={tag}
        id={id}
        desktopWidth={174}
        alt={`A still from ${title}`} />
      <span className="overlay"></span>
      <Play />
    </span>
  </button>
)

export default Episode