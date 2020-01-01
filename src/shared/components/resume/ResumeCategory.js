import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'

import { toggleCategoryResume } from '../../actions'

import Category from '../main/Category'
import ResumeEntry from './ResumeEntry'
import ResumeEntryPropTypes from './ResumeEntryPropTypes'

const ResumeCategory = ({ title, id, open, entries, dispatch }) => (
  <Category
    title={title}
    open={open}
    toggleCategory={() => dispatch(toggleCategoryResume(id))}>
    <ul>
      {entries.map(entry => (
        <ResumeEntry key={entry.id} {...entry}/>
      ))}
    </ul>
  </Category>
)

ResumeCategory.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  open: bool.isRequired,
  entries: arrayOf(shape(ResumeEntryPropTypes)).isRequired,
  dispatch: func.isRequired
}

export default ResumeCategory