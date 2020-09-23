import React from 'react'
import { arrayOf, string } from 'prop-types'
import { v1 as uuid } from 'uuid'
import Thumbnail from '../main/Thumbnail'

const Bio = ({ content }) => (
	<article id="bio">
		<div>
			<h1 aria-level="2">Cris Mertens</h1>
			{content.map(txt => <p key={uuid()} dangerouslySetInnerHTML={{ __html: txt }}></p>)}
			<a
				href="/downloads/cris-mertens-resume.pdf"
				title="Download résumé"
				download>
				Download Resume
			</a>
		</div>
		<figure>
			<Thumbnail
				image="cris-mertens"
				id="a6e16920-621d-11ea-bc55-0242ac130003"
				alt="Photo of Cris Mertens, Film and TV Editor" />
		</figure>
	</article>
)

Bio.propTypes = {
	content: arrayOf(string).isRequired
}

export default Bio
