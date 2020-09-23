import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { string } from 'prop-types'
import App from '../main/App'

const HTMLTemplate = ({ location }) => (
	<html lang="en-US">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			
			<title>Cris Mertens | Film Editor</title>
			<meta name="description" content="The official website of Los Angeles, CA based film editor Cris Mertens." />
			<link rel="stylesheet" href="/css/index.min.css" />
			<link rel="preconnect" href="https://www.youtube.com/iframe_api" crossOrigin="true" />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323232" />
			<meta name="msapplication-TileColor" content="#323232" />
			<meta name="theme-color" content="#ffffff" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@CrisMertens" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Cris Mertens | Film Editor" />
			<meta property="og:description" content="The official website of Los Angeles, CA based film editor Cris Mertens." />
			<meta property="og:url" content="https://www.crismertens.com" />
			<meta property="og:image" content="https://www.crismertens.com/images/cris-mertens.jpg" />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="1920" />
			<meta property="og:image:height" content="1080" />
			<meta property="og:image:alt" content="Photo of Cris Mertens, Film Editor" />
		</head>
		<body>
			<div id="root">
				<StaticRouter location={location}>
					<App />
				</StaticRouter>
			</div>
			<script src="/index.bundle.js"></script>
		</body>
	</html>
)

HTMLTemplate.propTypes = {
	location: string.isRequired
}

export default HTMLTemplate
