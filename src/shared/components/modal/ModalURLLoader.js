import { useContext, useEffect } from 'react'
import { object } from 'prop-types'

import { CMContext } from '../../store'
import { openModal } from '../../actions/'

const ModalURLLoader = ({ match }) => {
	const { id, title } = match.params
	const { data, dispatch } = useContext(CMContext)
	const { videos } = data

	useEffect(() => {
		if (!videos.length) return

		const targetVideo = videos.flatMap(({ entries }) => (
			entries.filter(video => video.tag === title && video.id === id)
		))[0]

		const pathname = match.path.split('/')[1]

		if (targetVideo) {
			dispatch(openModal(false, targetVideo, pathname))
		} else {
			window.history.pushState({}, '', `/${pathname}`)
		}
	}, [videos])

	return false
}

ModalURLLoader.propTypes = {
	match: object
}

export default ModalURLLoader
