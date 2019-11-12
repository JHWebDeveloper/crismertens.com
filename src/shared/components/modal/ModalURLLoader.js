import React, { useContext, useEffect } from 'react'

import { CMContext } from '../../store/'
import { openModal } from '../../actions/'

const ModalURLLoader = ({ match }) => {
  const { data, dispatch } = useContext(CMContext)
  const { allVideos } = data.reference

  useEffect(() => {
    const video = allVideos.filter(vid => vid.id === match.params.id)[0]
    const pathname = match.path.split('/')[0]
    
    if (video) dispatch(openModal(false, video, pathname))
  }, [allVideos])

  return false
}

export default ModalURLLoader