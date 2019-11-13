import axios from 'axios'
import { getShape } from '../utilities'

export const loadSiteData = () => axios
  .get('/api/sitedata')
  .then(res => ({
    type: 'LOAD_SITE_DATA',
    payload: res.data
  }))

export const initIntersectionObserver = () => ({
  type: 'INIT_INTERSECTION_OBSERVER',
  payload: new IntersectionObserver((entries, observer) => {
    entries.forEach(({ intersectionRatio, target }) => {
      if (intersectionRatio > 0) {
        target.src = target.dataset.src
        target.removeAttribute('data-src')
        observer.unobserve(target)
      }
    })
  })
})

export const openNavigation = () => ({
  type: 'OPEN_NAVIGATION'
})

export const closeNavigation = backToTop => dispatch => {
  if (backToTop) scrollTo(0, 0)

  dispatch({
    type: 'CLOSE_NAVIGATION'
  })
}

export const setFeaturedCurrent = n => ({
  type: 'SET_FEATURED_CURRENT',
  payload: n
})

export const incrementFeaturedLoaded = loadCount => dispatch => {
  if (loadCount < 2) dispatch({
    type: 'INCREMENT_FEATURED_LOADED'
  })
}

const isolateCategory = (pageName, id) => dispatch => {
  scrollTo(0, 0)
  dispatch({
    type: 'ISOLATE_CATEGORY',
    payload: { pageName, id }
  })
}

export const isolateCategoryVideos = id => isolateCategory('videos', id)

const resetCategories = pageName => dispatch => {
  scrollTo(0, 0)
  dispatch({
    type: 'RESET_CATEGORIES',
    payload: pageName
  })
}

export const resetCategoriesVideos = () => resetCategories('videos')

const toggleCategory = (pageName, id) => ({
  type: 'TOGGLE_CATEGORY',
  payload: { pageName, id }
})

export const toggleCategoryResume = id => toggleCategory('resume', id)
export const toggleCategoryVideos = id => toggleCategory('videos', id)

export const openModal = (el, videoData, pathname) => {
  if (pathname) {
    window.history.pushState({}, '', `/${pathname}/${videoData.image}/${videoData.id}`)
  }

  return {
    type: 'OPEN_MODAL',
    payload : {
      open: true,
      videoData,
      ...getShape(el)
    }
  }
}

export const animateModal = () => ({
  type: 'ANIMATE_MODAL',
  payload: {
    x: '0px',
    y: '0px',
    scale: 1
  }
})

export const markModalReady = () => ({
  type: 'MARK_MODAL_READY'
})

export const closeModal = pathname => {
  window.history.pushState({}, '', `/${pathname}`)

  return {
    type: 'CLOSE_MODAL'
  }
}