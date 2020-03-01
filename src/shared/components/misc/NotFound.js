import React from 'react'
import { object } from 'prop-types'

import Head from '../html/Head'
import Thumbnail from '../main/Thumbnail'

if (process.env.WEBPACK) require('../../css/notfound.css')

const NotFound = ({ route }) => (
  <>
    <Head {...route} />
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