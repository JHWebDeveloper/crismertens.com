import React, { useEffect, useRef } from 'react'
import VODLogo from '../svg/vod-logos'
import { applyDisplacement } from '../../utilities'

const VODLinks = ({ title, content }) => {
  const vodRef = useRef()

  useEffect(() => applyDisplacement(vodRef.current), [])

  return (
    <aside ref={vodRef}>
      {content.map(({ id, url, name }) => (
        <a
          key={id}
          href={url}
          title={`${title} on ${name}`}
          rel="external noopener noreferrer"
          target="_blank">
          <VODLogo name={name}/>
        </a>
      ))}
    </aside>
  )
}

export default VODLinks