import React, { useContext } from 'react'
if (process.env.WEBPACK) require('../../css/resume.css')

import { CMContext } from '../../store'

import Head from '../html/Head'
import Bio from './Bio'
import ResumeCategory from './ResumeCategory'

const Resume = ({ route }) => {
  const { resume, bio } = useContext(CMContext).data

  return (
    <>
      <Head {...route} />
      <Bio content={bio}/>
      {resume.map(category => (
        <ResumeCategory key={category.id} {...category} />
      ))}
    </>
  )
}

export default Resume