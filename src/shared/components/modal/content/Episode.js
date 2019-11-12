import React from 'react'

import Thumbnail from '../../main/Thumbnail'
import { Play } from '../../svg'

const Episode = ({ id, title, image, displayTitle }) => {
  return (
    <button
      data-title={title}
      title={`Click to play ${title}`}
      onMouseEnter={() => displayTitle(title)}
      onMouseLeave={() => displayTitle('')}>
      <span>
        <Thumbnail
          image={image}
          id={id}
          alt={`A still from ${title}`}
          displayTitle={displayTitle} />
        <span className="overlay"></span>
        <Play />
      </span>
    </button>
  )
}

export default Episode