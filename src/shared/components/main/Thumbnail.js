import React, { useEffect, useRef } from 'react'
import { getImageWidth } from '../../utilities'

const Thumbnail = (props, ref) => {
  const { image, id, isLazy, loadAction } = props
  const imageRef = isLazy ? ref : useRef()

  useEffect(() => {
    const width = getImageWidth(props.desktopWidth)
    const src = ['/images', 'render', width, id, image].join('/')

    imageRef.current.style.height = `${imageRef.current.clientWidth * 0.5625}px`

    if (isLazy) {
      imageRef.current.dataset.src = src
    } else {
      imageRef.current.src = src
    }
  }, [image, id])

  return (
    <img
     className="notloaded"
     ref={imageRef}
     onLoad={() => {
      imageRef.current.classList.remove('notloaded')
      imageRef.current.style.removeProperty('height')
      if (loadAction) loadAction()
     }}
     alt={props.alt} />
 )
}

export default Thumbnail