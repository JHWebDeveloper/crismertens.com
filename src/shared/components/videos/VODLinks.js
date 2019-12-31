import React, { useEffect, useRef } from 'react'
import VODLogo from '../svg/vod-logos'
import { applyDisplacement } from '../../utilities'

const VODLinks = ({ title, content }) => {
  const entryTitle = title
  const vodRef = useRef()

  useEffect(() => applyDisplacement(vodRef.current), [])

  return (
    <aside ref={vodRef}>
      {content.slice(0, 4).map(({ id, url, title }) => (
        <a
          key={id}
          href={url}
          title={`${entryTitle} on ${title}`}
          rel="external noopener noreferrer"
          target="_blank">
          <VODLogo name={title}/>
        </a>
      ))}
    </aside>
  )
}

export default VODLinks