import React, { useContext, useEffect, useState } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'

if (process.env.WEBPACK) require('../../css/reel.css')

import { CMContext } from '../../store'
import { loadFeatured } from '../../actions'

import Head from '../html/Head'
import Feature from './Feature'
import { Loading } from '../svg'

const Reel = ({ route }) => {
  const { data, dispatch } = useContext(CMContext)
  const { featured } = data

  const [featuredLoaded, countFeaturedLoaded] = useState(0)
  const [featuredCurrent, setFeaturedCurrent] = useState(0)

  const featureProps = {
    featuredLoaded,
    setFeaturedCurrent,
    featuredCurrent,
    countFeaturedLoaded,
    dispatch
  }

  useEffect(() => {
    dispatch(loadFeatured())
  }, [data.videos])

  return (
    <>
      <Head {...route} />
      <div id="greeting">
        <p>Editing is my craft.</p>
        <p>Storytelling is my passion.</p>
      </div>
      <div id="featured" className={featuredLoaded < 2 ? 'loading' : ''}>
        {featuredLoaded < 2 && <Loading />}
        {featured.length && <>
          <Feature
            displayTitle="Editing Reel"
            extendState={1}
            retractState={2}
            entry={featured[0]}
            {...featureProps} />
          <Feature
            displayTitle="Featured Work"
            extendState={2}
            retractState={1}
            entry={featured[1]}
            {...featureProps} />
        </>}
      </div>
      {renderRoutes(route.routes)}
    </>
  )
}

Reel.propTypes = {
  route: object.isRequired
}

export default Reel
