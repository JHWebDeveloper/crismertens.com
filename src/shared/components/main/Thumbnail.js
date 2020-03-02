import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'
import { bool, func, string } from 'prop-types'

import { ScrollHandlerContext } from '../../store/ScrollHandler'
import { getImageWidth } from '../../utilities'

const Thumbnail = ({ image, id, alt, loadAction, preloadModalBG }) => {
  const { lazyLoader } = useContext(ScrollHandlerContext)
  const [status, setStatus] = useState('loading')
  const [renderWidth, setRenderWidth] = useState(0)
  const imgRef = useRef()

  const onLoad = useCallback(() => {
    setStatus('loaded')
    imgRef.current.style.removeProperty('height')
    if (loadAction) loadAction()
  }, [])

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio || 1
    const calcWidth = imgRef.current.parentElement.clientWidth

    setRenderWidth(Math.round(calcWidth * pixelRatio))

    imgRef.current.style.height = `${calcWidth * 0.5625}px`

    lazyLoader.observe(imgRef.current)

    return () => {
      lazyLoader.unobserve(imgRef.current)
    }
  }, [])

  const path = `/images/render/${renderWidth}/${id}/${image}`

  return (
    <>
      <Helmet>
        { renderWidth && <link rel="preload" href={path} as="image" /> }
        { preloadModalBG && <link
          rel="preload"
          href={`/images/render/${getImageWidth()}/${id}/${image}`}
          as="image" /> }
      </Helmet>
      <img
        ref={imgRef}
        data-src={path}
        alt={alt}
        onLoad={onLoad}
        onError={() => setStatus('error')}
        style={{
          display: status === 'error' ? 'none' : 'block',
          opacity: status === 'loaded' ? 1 : 0
        }} />
    </>
  )
}

Thumbnail.propTypes = {
  image: string.isRequired,
  id: string.isRequired,
  alt: string.isRequired,
  loadAction: func,
  preloadModalBG: bool
}

export default Thumbnail
