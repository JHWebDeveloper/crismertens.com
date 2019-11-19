import React, { createContext, useEffect, useReducer } from 'react'
import reducer from '../reducer'
import { loadSiteData, initIntersectionObserver } from '../actions'

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
  intersectionObserver: false,
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

export const CMProvider = ({children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {

    loadSiteData().then(res => dispatch(res))
    dispatch(initIntersectionObserver())
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