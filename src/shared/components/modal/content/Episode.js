import React from 'react'

import Thumbnail from '../../main/Thumbnail'
import { Play } from '../../svg'

const Episode = ({ id, title, image, changeDisplayedTitle }) => {
  return (
    <button
      data-title={title}
      title={`Click to play ${title}`}
      onMouseEnter={() => changeDisplayedTitle(title)}
      onMouseLeave={() => changeDisplayedTitle('')}>
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