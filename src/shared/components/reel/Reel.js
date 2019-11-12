import React, { useContext } from 'react'
import { renderRoutes } from 'react-router-config';

if (process.env.WEBPACK) require('../../css/reel.css')

import { CMContext } from '../../store'

import Head from '../html/Head'
import Feature from './Feature'

const Reel = ({ route }) => {
  const { data, featuredLoaded }= useContext(CMContext)
  const { featured } = data

  return (
    <>
      <Head {...route} />
      <div id="greeting">
        <p>Editing is my craft.</p>
        <p>Storytelling is my passion.</p>
      </div>
      <div id="featured" className={featuredLoaded < 2 ? 'notloaded' : ''}>
        {featured[0] && <Feature
          displayTitle="Editing Reel"
          extendState={1}
          retractState={2}
          entry={featured[0]} />}
        {featured[1] && <Feature
          displayTitle="Featured Work"
          extendState={2}
          retractState={1}
          entry={featured[1]} />}
      </div>
      {renderRoutes(route.routes)}
    </>
  )
}

export default Reel