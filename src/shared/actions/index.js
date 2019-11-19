import axios from 'axios'
import { getShape } from '../utilities'

export const loadSiteData = () => axios
  .get('/api/sitedata')
  .then(res => ({
    type: 'LOAD_SITE_DATA',
    payload: res.data
  }))

export const loadFeatured = () => ({
  type: 'LOAD_FEATURED'
})

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

export const openModal = (el, videoData, pathname) => dispatch => {
  if (pathname) {
    window.history.pushState({}, '', `/${pathname}/${videoData.tag}/${videoData.id}`)
  }

  dispatch({
    type: 'OPEN_MODAL',
    payload : {
      displayedTitle: videoData.type === 1 ? 'available on...' : '',
      videoData,
      ...getShape(el)
    }
  })
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

export const closeModal = (pathname, id) => dispatch => {
  window.history.pushState({}, '', `/${pathname}`)
  document.querySelector(`a[href$="${id}"]`).focus()

  dispatch({
    type: 'CLOSE_MODAL'
  })
}

export const changeDisplayedTitle = (title = '') => ({
  type: 'CHANGE_DISPLAYED_TITLE',
  payload: title
})

export const playEpisode = id => ({
  type: 'PLAY_EPISODE',
  payload: id
})

export const closeEpisode = id => dispatch => {
  document.querySelector(`#${id}`).focus()

  dispatch({
    type: 'CLOSE_EPISODE'
  })
}