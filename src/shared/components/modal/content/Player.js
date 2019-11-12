import React, { useContext } from 'react'

import { CMContext } from '../../../store'
import { closeModal } from '../../../actions'

import YouTube from 'react-youtube'

const Player = ({ videoData }) => {
  const { dispatch } = useContext(CMContext)
  const opts = {
    playerVars: {
      controls: 1,
      autoplay: 1,
      playsinline: 1
    }
  }

  return (
    <YouTube
      containerClassName={'player'}
      videoId={videoData.videoId}
      opts={opts}
      onEnd={() => dispatch(closeModal())} />
  )
}

export default Player
