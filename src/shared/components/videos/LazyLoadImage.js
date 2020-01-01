import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import { bool, func, number, string } from 'prop-types'
import { CMContext } from '../../store'
import Thumbnail from '../main/Thumbnail'

const LazyThumbnail = forwardRef(Thumbnail)

const LazyLoadImage = props => {
  const { intersectionObserver } = useContext(CMContext)
  const ref = useRef()

  useEffect(() => {
    if (intersectionObserver) intersectionObserver.observe(ref.current)
  }, [intersectionObserver])

  return <LazyThumbnail {...props} isLazy={true} ref={ref} />
}

LazyLoadImage.propTypes = {
  image: string.isRequired,
  id: string.isRequired,
  alt: string.isRequired,
  loadAction: func,
  desktopWidth: number
}

LazyThumbnail.propTypes = {
  ...LazyLoadImage.propTypes,
  isLazy: bool
}

export default LazyLoadImage