import axios from 'axios'
import * as TYPES from './types'
import { getShape } from '../utilities'

export const loadSiteData = async () => ({
  type: TYPES.LOAD_SITE_DATA,
  payload: (await axios.get('/api/sitedata')).data
})

export const loadFeatured = () => ({
  type: TYPES.LOAD_FEATURED
})

export const openNavigation = () => ({
  type: TYPES.OPEN_NAVIGATION
})

export const closeNavigation = backToTop => dispatch => {
  if (backToTop) scrollTo(0, 0)

  dispatch({
    type: TYPES.CLOSE_NAVIGATION
  })
}

const isolateCategory = (pageName, id) => dispatch => {
  scrollTo(0, 0)
  dispatch({
    type: TYPES.ISOLATE_CATEGORY,
    payload: { pageName, id }
  })
}

export const isolateCategoryVideos = id => isolateCategory('videos', id)

const resetCategories = pageName => dispatch => {
  scrollTo(0, 0)
  dispatch({
    type: TYPES.RESET_CATEGORIES,
    payload: pageName
  })
}

export const resetCategoriesVideos = () => resetCategories('videos')

const toggleCategory = (pageName, id) => ({
  type: TYPES.TOGGLE_CATEGORY,
  payload: { pageName, id }
})

export const toggleCategoryResume = id => toggleCategory('resume', id)
export const toggleCategoryVideos = id => toggleCategory('videos', id)

export const openModal = (el, videoData, pathname) => dispatch => {
  if (pathname) {
    window.history.pushState({}, '', `/${pathname}/${videoData.tag}/${videoData.id}`)
  }

  dispatch({
    type: TYPES.OPEN_MODAL,
    payload: {
      displayedTitle: videoData.type === 'vod' ? 'available on...' : '',
      videoData,
      ...getShape(el)
    }
  })
}

export const animateModal = () => ({
  type: TYPES.ANIMATE_MODAL,
  payload: {
    x: '0px',
    y: '0px',
    scale: 1
  }
})

export const markModalReady = () => ({
  type: TYPES.MARK_MODAL_READY
})

export const closeModal = (pathname, id) => dispatch => {
  window.history.pushState({}, '', `/${pathname}`)
  document.querySelector(`a[href$="${id}"]`).focus()

  dispatch({
    type: TYPES.CLOSE_MODAL
  })
}

export const changeDisplayedTitle = (title = '') => ({
  type: TYPES.CHANGE_DISPLAYED_TITLE,
  payload: title
})

export const playEpisode = id => ({
  type: TYPES.PLAY_EPISODE,
  payload: id
})

export const closeEpisode = id => dispatch => {
  document.querySelector(`#${id}`).focus()

  dispatch({
    type: TYPES.CLOSE_EPISODE
  })
}
