import React, { useContext } from 'react'

import { CMContext } from '../../store'
import { toggleCategoryResume } from '../../actions'

import Category from '../main/Category'
import ResumeEntry from './ResumeEntry'

const ResumeCategory = ({ title, id, open, entries }) => {
  const { dispatch } = useContext(CMContext)

  return (
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
}

export default ResumeCategory