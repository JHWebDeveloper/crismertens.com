import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'

import { toggleCategoryVideos } from '../../actions'

import Category from '../main/Category'
import VideoEntry from './VideoEntry'
import VideoEntryPropTypes from './VideoEntryPropTypes'

const VideoCategory = ({ id, title, open, entries, dispatch }) => (
  <Category
    title={title}
    open={open}
    toggleCategory={() => dispatch(toggleCategoryVideos(id))}>
    <div role="presentation">
      {entries.map(entry => (
        <VideoEntry
          key={entry.id}
          entry={entry}
          dispatch={dispatch} />
      ))}
    </div>
  </Category>
)

VideoCategory.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  open: bool.isRequired,
  entries: arrayOf(shape(VideoEntryPropTypes)).isRequired,
  dispatch: func.isRequired
}

export default VideoCategory
