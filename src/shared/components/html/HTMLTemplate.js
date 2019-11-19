import React from 'react'
import { StaticRouter } from 'react-router-dom'
import App from '../main/App'

const HTMLTemplate = ({ location }) => (
  <html lang="en-US">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      
      <title>Cris Mertens | Film Editor</title>
      <meta name="description" content="The official website of Los Angeles, CA based film editor Cris Mertens." />
      <link rel="stylesheet" href="/css/main.min.css" />
      <link rel="preconnect" href="https://www.youtube.com/iframe_api" crossOrigin />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323232" />
      <meta name="msapplication-TileColor" content="#323232" />
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body>
      <div id="root">
        <StaticRouter location={location}>
          <App/>
        </StaticRouter>
      </div>
      <script src="/bundle.js"></script>
    </body>
  </html>
)

export default HTMLTemplate