import React from 'react'

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

export default ResumeEntry