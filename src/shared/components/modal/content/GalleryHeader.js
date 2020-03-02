import React, { useContext } from 'react'
import { number, string } from 'prop-types'

import { CMContext } from '../../../store'

const GalleryHeader = ({ year, title }) => {
  const { displayedTitle } = useContext(CMContext).modal

  return (
    <header>
      <h2 data-year={year}>{title}</h2>
      <span>{displayedTitle}</span>
    </header>
  )
}

GalleryHeader.propTypes = {
  year: number.isRequired,
  title: string.isRequired
}

export default GalleryHeader
