import React, { useContext } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'

if (process.env.WEBPACK) require('../../css/videos.css')

import { CMContext } from '../../store'

import Head from '../html/Head'
import VideoCategory from './VideoCategory'

const Videos = ({ route }) => {
  const { data, dispatch } = useContext(CMContext)

  return (
    <>
      <Head {...route} />
      {data.videos.map(category => (
        <VideoCategory
          key={category.id}
          dispatch={dispatch}
          {...category} />
      ))}
      {renderRoutes(route.routes)}
    </>
  )
}

Videos.propTypes = {
  route: object.isRequired
}

export default Videos