import React, { useEffect } from 'react'
import YouTubePlayer from 'youtube-player'

import { playEpisode } from '../../../actions'

const Player = ({ videoData, episodeId, styles, dispatch, closeModal }) => {
  const { type, videoId, content } = videoData

  const options = {
    playerVars: {
      controls: 1,
      autoplay: 1,
      playsinline: 1
    },
    suggestedQuality: 1080
  }

  if (type === 'video') options.videoId = videoId

  useEffect(() => {
    const player = YouTubePlayer('player-placeholder', options)

    if (type === 'series') {
      player.loadPlaylist({
        list: videoId,
        listType: 'playlist',
        index: content.findIndex(ep => ep.id === episodeId)
      })

      player.on('stateChange', e => {
        if (e.data > 0) return

        const index = e.target.l.playlistIndex

        if (e.data === 0 && index + 1 === content.length) {
          closeModal()
        } else if (e.data < 1) {
          dispatch(playEpisode(content[index].id))
        }
      })
    } else {
      player.on('stateChange', e => {
        if (e.data === 0) closeModal()
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
