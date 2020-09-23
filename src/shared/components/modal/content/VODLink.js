import React from 'react'
import { string } from 'prop-types'

import VODLogo from '../../svg/vod-logos'

const VODLink = ({ entryTitle, title, url }) => {
	return (
		<a
			href={url}
			title={`${entryTitle} on ${title}`}
			rel="external noopener noreferrer"
			target="_blank">
			<VODLogo name={title}/>
		</a>
	)
}

VODLink.propTypes = {
	entryTitle: string.isRequired,
	title: string.isRequired,
	url: string.isRequired
}

export default VODLink
