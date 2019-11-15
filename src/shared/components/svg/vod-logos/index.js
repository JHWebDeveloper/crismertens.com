import React from 'react'

import ITunesStore from './ITunesStore'
import GooglePlay from './GooglePlay'
import AmazonVideo from './AmazonVideo'
import YouTube from './YouTube'
import IMDb from './IMDb'

const VODLogo = ({ name }) => {
  switch (name) {
    case 'iTunes Store':
      return <ITunesStore />
    case 'Google Play':
      return <GooglePlay />
    case 'Amazon Video':
      return <AmazonVideo />
    case 'YouTube':
      return <YouTube />
    case 'IMDb':
      return <IMDb />
    default:
      return false
  }
}

export default VODLogo