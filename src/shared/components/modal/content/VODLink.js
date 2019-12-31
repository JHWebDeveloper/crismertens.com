import React from 'react'

import VODLogo from '../../svg/vod-logos'

const VODLink = ({ entryTitle, title, url }) => {
  return (
    <a
      href={url}
      title={`${entryTitle} on ${title}`}
      rel="external noopener noreferrer"
      target="_blank">
      <VODLogo name={title}/>
    </a>
  )
}

export default VODLink
