import React from 'react'
import { Helmet } from 'react-helmet'
import { string } from 'prop-types'

const Head = ({ path, title, alternate, noindex }) => {
  const fixedPath = path === '/reel' ? '' : path

  return (
    <Helmet>
      <title>{title}</title>
      {noindex
        ? <meta name="robots" content="noindex, nofollow"/>
        : <link rel="canonical" href={`https://www.crismertens.com${fixedPath}.html`} />}
      {!noindex && alternate && <link rel="alternate" href={`https://www.crismertens.com${alternate}`} />}
    </Helmet>
  )
}

Head.propTypes = {
  path: string,
  alternate: string,
  title: string
}

export default Head