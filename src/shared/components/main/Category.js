import React, { useCallback, useRef } from 'react'
import { CaretDown } from '../svg'

const Category = ({ title, open, toggleCategory, children }) => {
  const ref = useRef()

  const changeHeightOnClick = useCallback(() => {
    ref.current.style.height = `${ref.current.scrollHeight}px`
    toggleCategory()

    setTimeout(() => {
      ref.current.style.removeProperty('height')
    }, open ? 10 : 350)
  }, [open])

  return (
    <section className={open ? 'open' : ''} ref={ref}>
      <header>
        <h2>{title}</h2>
        <button
          aria-expanded={open}
          title={`${open ? 'Close' : 'Open'} ${title}`}
          onClick={changeHeightOnClick}>
          <CaretDown />
        </button>
      </header>
      { children }
    </section>
  )
}

export default Category