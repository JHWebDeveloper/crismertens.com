import React from 'react'
import { Helmet } from 'react-helmet'
import { arrayOf, bool, element, oneOfType, string } from 'prop-types'

const Head = ({ path, title, alternate, noindex, children }) => {
  const fixedPath = path === '/reels' ? '' : path

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
  noindex: bool,
  children: oneOfType([element, arrayOf(element)])
}

export default Head
