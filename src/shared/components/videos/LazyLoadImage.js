import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import { CMContext } from '../../store'
import Thumbnail from '../main/Thumbnail'

const LazyThumbnail = forwardRef(Thumbnail)

const LazyLoadImage = props => {
  const { intersectionObserver } = useContext(CMContext)
  const ref = useRef()

  useEffect(() => {
    if (intersectionObserver) intersectionObserver.observe(ref.current)
  }, [intersectionObserver])

  return <LazyThumbnail {...props} isLazy="true" ref={ref} />
}

export default LazyLoadImage