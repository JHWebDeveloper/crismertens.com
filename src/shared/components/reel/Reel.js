import React, { useContext, useEffect, useState } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'

if (process.env.WEBPACK) require('../../css/reel.css')

import { CMContext } from '../../store'
import { loadFeatured } from '../../actions'

import Head from '../html/Head'
import Feature from './Feature'
import { Loading } from '../svg'

const schema = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'person',
  name: 'Cris Mertens',
  jobTitle: 'Editor',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.crismertens.com'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA'
  },
  email: 'mailto:crismertens@gmail.com',
  url: 'https://www.crismertens.com',
  sameAs: [
    'https://www.imdb.com/name/nm2549237/',
    'https://www.instagram.com/crismertens/',
    'https://www.youtube.com/channel/UC05EvpDqctkPvOBjmj40T2w',
    'https://www.facebook.com/cristophermertens',
    'https://www.linkedin.com/in/crismertens/',
    'https://twitter.com/CrisMertens',
    'https://vimeo.com/crismertens'
  ]
})

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
      <Head {...route}>
        <script type="application/ld+json">{schema}</script>
      </Head>
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
