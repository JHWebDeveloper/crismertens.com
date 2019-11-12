import React, { useContext } from 'react'
import { renderRoutes } from 'react-router-config';

if (process.env.WEBPACK) require('../../css/videos.css')

import { CMContext } from '../../store'

import Head from '../html/Head'
import VideoCategory from './VideoCategory'

const Videos = ({ route }) => {
  const { videos } = useContext(CMContext).data

  return (
    <>
      <Head {...route} />
      {videos.map(category => (
        <VideoCategory key={category.id} {...category} />
      ))}
      {renderRoutes(route.routes)}
    </>
  )
}

export default Videos