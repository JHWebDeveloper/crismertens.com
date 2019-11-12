import React, { useState } from 'react'

import ContentSlider from './ContentSlider'
import VODLink from './VODLink'
import Episode from './Episode'

//import EpisodePlayer from './Player'

const Gallery = ({ videoData }) => {
  const [ currentTitle, displayTitle ] = useState('')
  const { type, title, year, content } = videoData
  const isVOD = type === 1
  const ContentItem = isVOD ? VODLink : Episode

  return (
    <div id="gallery">
      <div>
        <header>
          <h2 data-year={year}>{title}</h2>
          <span>{isVOD ? 'available on:' : currentTitle}</span>
        </header>
        <ContentSlider>
          {content.map(item => (
            <ContentItem
              key={item.id}
              entryTitle={title}
              displayTitle={displayTitle}
              {...item} />
          ))}
        </ContentSlider>
      </div>
    </div>
  )
}

export default Gallery
