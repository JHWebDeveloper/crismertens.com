import React, { useContext } from 'react'
import { object } from 'prop-types'
if (process.env.WEBPACK) require('../../css/resume.css')

import { CMContext } from '../../store'

import Head from '../html/Head'
import Bio from './Bio'
import ResumeCategory from './ResumeCategory'

const Resume = ({ route }) => {
  const { data, dispatch } = useContext(CMContext)

  return (
    <>
      <Head {...route} />
      <Bio content={data.bio}/>
      {data.resume.map(category => (
        <ResumeCategory
          key={category.id}
          dispatch={dispatch}
          {...category} />
      ))}
    </>
  )
}

Resume.propTypes = {
  route: object.isRequired
}

export default Resume