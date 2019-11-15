import React from 'react'

import GalleryHeader from './GalleryHeader'
import ContentSlider from './ContentSlider'
import VODLink from './VODLink'
import Episode from './Episode'
import IMDb from '../../svg/vod-logos/IMDb'

const Gallery = ({ videoData, styles }) => {
  const { type, title, year, content, imdb } = videoData
  const ContentItem = type === 1 ? VODLink : Episode

  return (
    <div id="gallery" style={styles}>
      <div>
        <GalleryHeader year={year} title={title} />
        <ContentSlider hasScrolling={content.length > 4}>
          {content.map((item, i) => (
            <ContentItem
              key={item.id}
              index={i}
              entryTitle={title}
              {...item} />
          ))}
        </ContentSlider>
        {imdb && (
          <footer>
            <a href={imdb} rel="external nooppener noreferrer" target="_blank">
              <IMDb />
            </a>
          </footer>
        )}
      </div>
    </div>
  )
}

export default Gallery
