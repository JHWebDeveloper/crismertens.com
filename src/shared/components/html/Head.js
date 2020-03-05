import React from 'react'
import { Helmet } from 'react-helmet'
import { string, bool } from 'prop-types'

const Head = ({ path, title, alternate, noindex, children }) => {
  const fixedPath = path === '/reel' ? '' : path

  return (
    <Helmet encodeSpecialCharacters={false}>
      <title>{title}</title>
      {noindex
        ? <meta name="robots" content="noindex, nofollow"/>
        : <link rel="canonical" href={`https://www.crismertens.com${fixedPath}`} />}
      {!noindex && alternate && <link rel="alternate" href={`https://www.crismertens.com${alternate}`} />}
      { children }
    </Helmet>
  )
}

Head.propTypes = {
  path: string,
  title: string,
  alternate: string,
  noindex: bool
}

export default Head
