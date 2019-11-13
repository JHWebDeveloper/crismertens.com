import React, { memo, useState } from 'react'

import ContentSlider from './ContentSlider'
//import EpisodePlayer from './Player'

const Gallery = ({ videoData }) => {
  const [ displayedTitle, changeDisplayedTitle ] = useState('')
  const { type, title, year, content } = videoData

  return (
    <div id="gallery">
      <div>
        <header>
          <h2 data-year={year}>{title}</h2>
          <span>{type === 1 ? 'available on:' : displayedTitle}</span>
        </header>
        <ContentSlider
          type={type}
          title={title}
          content={content}
          changeDisplayedTitle={changeDisplayedTitle} />
      </div>
    </div>
  )
}

export default Gallery
