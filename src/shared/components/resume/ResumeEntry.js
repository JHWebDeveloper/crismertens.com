import React from 'react'

const ResumeEntry = ({ type, title, company, format, position, start, end, skill }) => (
  type ? (
    <li className="skill">{skill}</li>
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
        <li>{end ? `${start} - ${end}` : start}</li>
      </ul>
    </li>
  )
)

export default ResumeEntry