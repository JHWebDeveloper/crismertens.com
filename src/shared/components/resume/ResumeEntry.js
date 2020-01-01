import React from 'react'
import ResumeEntryPropTypes from './ResumeEntryPropTypes'

const ResumeEntry = ({ type, title, company, format, position, year }) => (
  type === 'skill' ? (
    <li className="skill">{title}</li>
  ) : (
    <li className="job">
      <ul>
        <li>
          <ul>
            <li>{ title }</li>
            {company && <li>{ company }</li>}
            {format && <li>{ format }</li>}
          </ul>
        </li>
        <li>{position}</li>
        <li>{year}</li>
      </ul>
    </li>
  )
)

ResumeEntry.propTypes = ResumeEntryPropTypes

export default ResumeEntry