import React from 'react'
import { Helmet } from 'react-helmet'
import { object } from 'prop-types'
import Thumbnail from '../main/Thumbnail'

if (process.env.WEBPACK) require('../../css/notfound.css')

const NotFound = ({ route }) => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, follow" />
      <title>{ route.title }</title>
    </Helmet>
    <div id="notfound">
      <Thumbnail
        image="error-puppy"
        id="0"
        alt="Error Puppy" />
      <div>
        <h2>ZZzzz...</h2>
        <p>Sorry, but it looks like all the little weiner dogs that run this site fell asleep!</p>
      </div>
    </div>
  </>
)

NotFound.propTypes = {
  route: object.isRequired
}

export default NotFound