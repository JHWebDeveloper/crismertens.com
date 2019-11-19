import React from 'react'

import { toggleCategoryVideos } from '../../actions'

import Category from '../main/Category'
import VideoEntry from './VideoEntry'

const VideoCategory = ({ title, id, open, entries, dispatch }) => (
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

export default VideoCategory