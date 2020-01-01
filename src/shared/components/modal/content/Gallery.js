import React from 'react'
import { func, object, shape } from 'prop-types'

import GalleryHeader from './GalleryHeader'
import ContentSlider from './ContentSlider'
import VODLink from './VODLink'
import Episode from './Episode'
import { IMDbColor } from '../../svg'
import VideoEntryPropTypes from '../../videos/VideoEntryPropTypes'

const Gallery = ({ videoData, styles, dispatch }) => {
  const { type, title, year, content, imdb } = videoData
  const ContentItem = type === 'vod' ? VODLink : Episode

  return (
    <div id="gallery" style={styles}>
      <div>
        <GalleryHeader year={year} title={title} />
        <ContentSlider hasScrolling={content.length > 4}>
          {content.map(item=> (
            <ContentItem
              key={item.id}
              entryTitle={title}
              dispatch={dispatch}
              {...item} />
          ))}
        </ContentSlider>
        {imdb && (
          <footer>
            <a href={imdb} rel="external noopener noreferrer" target="_blank">
              <IMDbColor />
            </a>
          </footer>
        )}
      </div>
    </div>
  )
}

Gallery.propTypes = {
  videoData: shape(VideoEntryPropTypes).isRequired,
  styles: object,
  dispatch: func.isRequired
}

export default Gallery
