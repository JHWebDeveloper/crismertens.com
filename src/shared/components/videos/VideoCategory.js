import React, { useContext } from 'react'

import { CMContext } from '../../store'
import { toggleCategoryVideos } from '../../actions'

import Category from '../main/Category'
import VideoEntry from './VideoEntry'

const VideoCategory = ({ title, id, open, entries }) => {
  const { dispatch } = useContext(CMContext)

  return (
    <Category
      title={title}
      open={open}
      toggleCategory={() => dispatch(toggleCategoryVideos(id))}>
      <div role="presentation">
        {entries.map(entry => (
          <VideoEntry key={entry.id} entry={entry}/>
        ))}
      </div>
    </Category>
  )
}

export default VideoCategory