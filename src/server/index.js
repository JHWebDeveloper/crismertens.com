import express from 'express'
import helmet from 'helmet'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchRoutes } from 'react-router-config'

import routes from '../shared/routes'
import HTMLTemplate from '../shared/components/html/HTMLTemplate'

import SiteData from './routes/SiteData'

const app  = express()
const port = process.env.PORT || 3000

app.use(helmet())

/* develblock:start */
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
  
  const config = require('../../webpack.dev.js')(process.env.GA_ID)
  const compiler = require('webpack')(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
  
  app.use(express.static(path.resolve(__dirname, 'src', 'client')))

  app.use('/images/render', require('./routes/Images').router)
}
/* develblock:end */

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client'))
}

app.use('/api/sitedata', SiteData)

app.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url)

  const promises = branch.map(({ route, match }) => {
    return route.loadData
      ? route.loadData(match)
      : Promise.resolve(null)
  })

  Promise.all(promises).then(() => {
    const html = renderToString(<HTMLTemplate location={req.url} />)
    res.send(`<!DOCTYPE html>${html}`)
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}`)) // eslint-disable-line no-console
