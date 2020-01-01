import React from 'react'
import { Helmet } from 'react-helmet'
import { string } from 'prop-types'

const url = 'http://www.crismertens.com'

const Head = ({ path, alternate, title }) => {
  const pageURL = [url, path === '/reel' ? '' : path].join('')

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={pageURL} />
      {alternate && <link rel="alternate" href={[url, alternate].join('')} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CrisMertens" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="The official website of Los Angeles, CA based film editor Cris Mertens." />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content="http://www.crismertens.com/images/render/1920/0/cris-mertens" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Photo of Cris Mertens, Film Editor" />
    </Helmet>
  )
}

Head.propTypes = {
  path: string,
  alternate: string,
  title: string
}

export default Head