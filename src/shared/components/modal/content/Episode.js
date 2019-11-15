import React, { useContext } from 'react'

import { CMContext } from '../../../store'
import { playEpisode, changeDisplayedTitle } from '../../../actions'

import Thumbnail from '../../main/Thumbnail'
import { Play } from '../../svg'

const Episode = ({ title, index, image, id }) => {
  const { dispatch } = useContext(CMContext)

  return (
    <button
      data-title={title}
      title={`Click to play ${title}`}
      onClick
      onClick={() => dispatch(playEpisode(index))}
      onMouseEnter={() => dispatch(changeDisplayedTitle(title))}
      onMouseLeave={() => dispatch(changeDisplayedTitle())}>
      <span>
        <Thumbnail
          image={image}
          id={id}
          desktopWidth={174}
          alt={`A still from ${title}`} />
        <span className="overlay"></span>
        <Play />
      </span>
    </button>
  )
}

export default Episode