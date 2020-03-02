import React, { useCallback, useEffect, useRef, useState } from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'

import { CaretDown } from '../svg'

const Dropdown = ({ name, url, content, isolateCategory, resetCategories, dispatch }) => {
  const [ open, toggleDropdown ] = useState(false)
  const ref = useRef()

  const toggleDropdownOnTouch = useCallback(e => {
    e.preventDefault()
    toggleDropdown(!open)
  }, [open])

  useEffect(() => {
    ref.current.addEventListener('touchstart', toggleDropdownOnTouch)

    return () => {
      ref.current.removeEventListener('touchstart', toggleDropdownOnTouch)
    }
  }, [open])

  return (
    <span
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
      className="dropdown"
      role="presentation">
      <Link
        to={url}
        title={name}
        ref={ref}
        aria-expanded={open}
        onBlur={() => toggleDropdown(false)}
        onClick={() => dispatch(resetCategories())}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            dispatch(resetCategories())
            toggleDropdown(!open)
          }
        }}>
        {name}
        <CaretDown fill="#fff" />
      </Link>
      <ul role="menu">
        {content.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={url}
              title={title}
              onFocus={() => toggleDropdown(true)}
              onBlur={() => toggleDropdown(false)}
              onClick={() => dispatch(isolateCategory(id))}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
        <li id="all">
          <Link
            to="videos/"
            title="All"
            onFocus={() => toggleDropdown(true)}
            onBlur={() => toggleDropdown(false)}
            onClick={() => dispatch(resetCategories())}>
            All
          </Link>
        </li>
      </ul>
    </span>
  )
}

Dropdown.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  content: arrayOf(shape({
    title: string,
    id: string
  })).isRequired,
  isolateCategory: func.isRequired,
  resetCategories: func.isRequired,
  dispatch: func.isRequired
}

export default Dropdown
