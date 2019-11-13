import React, { useCallback, useEffect, useRef, useState } from 'react'

import VODLink from './VODLink'
import Episode from './Episode'
import { CaretLeft, CaretRight } from '../../svg'
import { applyDisplacement } from '../../../utilities'

const ContentSlider = ({ content, type, title, changeDisplayedTitle }) => {
  const [ prevEnabled, enablePrev ] = useState(false)
  const [ nextEnabled, enableNext ] = useState(content.length > 4)
  const container = useRef()
  const slider = useRef()
  const ContentItem = type === 1 ? VODLink : Episode

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
      {prevEnabled && (
        <button title="Previous" onClick={() => slide(true)}>
          <CaretLeft />
        </button>
      )}
      <div
        ref={container}
        onScroll={toggleButtons}>
        <div
          className="slider-items"
          ref={slider}
          style={content.length < 4 ? { textAlign: 'center' } : {}}>
          {content.map(item => (
            <ContentItem
              key={item.id}
              entryTitle={title}
              changeDisplayedTitle={changeDisplayedTitle}
              {...item} />
          ))}
        </div>
      </div>
      {nextEnabled && (
        <button title="Next" onClick={() => slide()}>
          <CaretRight />
        </button>
      )}
    </div>
  )
}

export default ContentSlider
