import React from 'react'
import { string, func } from 'prop-types'

import { playEpisode, changeDisplayedTitle } from '../../../actions'

import Thumbnail from '../../main/Thumbnail'
import { Play } from '../../svg'

const Episode = ({ title, tag, id, dispatch }) => (
  <button
    data-title={title}
    title={`Click to play ${title}`}
    id={`EP_${id}`}
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

Episode.propTypes = {
  title: string.isRequired,
  tag: string.isRequired,
  id: string.isRequired,
  dispatch: func.isRequired
}

export default Episode
