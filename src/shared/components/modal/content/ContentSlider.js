import React, { useEffect, useRef } from 'react'

import { CaretLeft, CaretRight } from '../../svg'
import { applyDisplacement } from '../../../utilities'

const ContentSlider = ({ children }) => {
  const sliderRef = useRef()

  useEffect(() => applyDisplacement(sliderRef.current), [])

  return (
    <div role="region" aria-label="gallery">
      <button title="Previous">
        <CaretLeft />
      </button>
      <div>
        <div>
          <div
            className="slider-items"
            ref={sliderRef}>
            { children }
          </div>
        </div>
      </div>
      <button title="Next">
        <CaretRight />
      </button>
    </div>
  )
}

export default ContentSlider
