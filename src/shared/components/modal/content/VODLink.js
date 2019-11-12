import React from 'react'

import VODLogo from '../../svg/vod-logos'

const VODLink = ({ entryTitle, name, url }) => {
  return (
    <a
      href={url}
      title={`${entryTitle} on ${name}`}
      rel="external noopener noreferrer"
      target="_blank">
      <VODLogo name={name}/>
    </a>
  )
}

export default VODLink
