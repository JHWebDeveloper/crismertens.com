import React, { useEffect } from 'react'
import YouTubePlayer from 'youtube-player'

import { updateEpisodeNumber, closeModal } from '../../../actions'

const Player = ({ videoData, episodeNumber, styles, dispatch }) => {
  const { type, videoId, content } = videoData

  const options = {
    playerVars: {
      controls: 1,
      autoplay: 1,
      playsinline: 1,
    },
    suggestedQuality: 1080,
  }

  if (type === 0) options.videoId = videoId

  useEffect(() => {
    const player = YouTubePlayer('player-placeholder', options)

    if (type === 2) {
      player.loadPlaylist({
        list: videoId,
        listType: 'playlist',
        index: episodeNumber
      })

      player.on('stateChange', e => {
        if (e.data !== 0) return

        const index = e.target.l.playlistIndex

        if (index + 1 === content.length) {
          dispatch(closeModal())
        } else {
          dispatch(updateEpisodeNumber(index + 1))
        }
      })
    } else {
      player.on('stateChange', e => {
        if (e.data === 0) dispatch(closeModal())
      })
    }
  })

  return (
    <div id="player" style={styles}>
      <div id="player-placeholder"></div>
    </div>
  )
}

export default Player
