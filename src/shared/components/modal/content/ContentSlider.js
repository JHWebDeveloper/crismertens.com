import React, { useCallback, useEffect, useRef, useState } from 'react'

import ContentSliderButton from './ContentSliderButton'
import { CaretLeft, CaretRight } from '../../svg'
import { applyDisplacement } from '../../../utilities'

const ContentSlider = ({ hasScrolling, children }) => {
  const [ prevEnabled, enablePrev ] = useState(false)
  const [ nextEnabled, enableNext ] = useState(hasScrolling)
  const container = useRef()
  const slider = useRef()
  

  useEffect(() => {
    applyDisplacement(slider.current)
  }, [])

  const slide = useCallback(reverse => {
    const el = container.current
    el.scroll({
      top: 0,
      left: el.scrollLeft + el.clientWidth * 0.8 * (reverse ? -1 : 1),
      behavior: 'smooth'
    })
  }, [])

  const toggleButtons = useCallback(() => {
    const el = container.current

    enablePrev(el.scrollLeft > 0)
    enableNext(el.scrollLeft < el.scrollWidth - el.clientWidth)
  }, [])

  return (
    <div role="region" aria-label="gallery">
      <ContentSliderButton
        enabled={prevEnabled}
        buttonTitle="Previous"
        buttonAction={(() => slide(true))}>
        <CaretLeft />
      </ContentSliderButton>
      <div ref={container} onScroll={toggleButtons}>
        <div
          className="slider-items"
          ref={slider}
          style={hasScrolling ? {} : { textAlign: 'center' }}>
          { children }
        </div>
      </div>
      <ContentSliderButton
        enabled={nextEnabled}
        buttonTitle="Next"
        buttonAction={(() => slide())}>
        <CaretRight />
      </ContentSliderButton>
    </div>
  )
}

export default ContentSlider
