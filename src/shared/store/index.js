import React, { createContext, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { arrayOf, element, oneOfType } from 'prop-types'
import reducer from '../reducer'
import { loadSiteData } from '../actions'

const initState = {
  data: {
    bio: [],
    resume: [],
    videos: [],
    featured: [],
    featuredId: [],
    videoCategoriesStatic: [],
    reference: {
      allVideoCategories: [],
      allVideos: []
    }
  },
  navOpen: false,
  modal: {
    open: false,
    ready: false,
    videoData: {},
    x: 0,
    y: 0,
    scale: 0,
    displayedTitle: '',
    episode: false,
    episodeId: false,
    episodeNumber: 0
  }
}

export const CMContext = createContext()

export const CMProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const history = useHistory()

  useEffect(() => {
    (async () => {
      try {
        dispatch(await loadSiteData())
      } catch (err) {
        history.push('/error')
      }
    })()
  }, [])

  return (
    <CMContext.Provider value={{
      ...state,
      dispatch: input => (
        input instanceof Function ? input(dispatch, state) : dispatch(input)
      )
    }}>
      { children }
    </CMContext.Provider> 
  )
}

CMProvider.propTypes = {
  children: oneOfType([element, arrayOf(element)])
}
