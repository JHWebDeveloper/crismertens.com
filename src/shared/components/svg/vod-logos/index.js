import React from 'react'
import { string } from 'prop-types'

import ITunesStore from './ITunesStore'
import GooglePlay from './GooglePlay'
import AmazonVideo from './AmazonVideo'
import YouTube from './YouTube'

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
    default:
      return false
  }
}

VODLogo.propTypes = {
  name: string.isRequired
}

export default VODLogo
