export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'LOAD_SITE_DATA':
      const allVideos = payload.videos
        .map(video => video.entries)
        .flat()

      return {
        ...state,
        data: {
          ...payload,
          featured: payload.featured.map(feature => (
            allVideos.find(({ id }) => id === feature)
          )),
          reference: {
            allVideoCategories: payload.videos.map(({ title, id }) => ({ title, id })),
            allVideos
          }
        }
      }
    case 'INIT_INTERSECTION_OBSERVER':
      return {
        ...state,
        intersectionObserver: payload
      }
    case 'OPEN_NAVIGATION':
      return {
        ...state,
        navOpen: true
      }
    case 'CLOSE_NAVIGATION':
      return {
        ...state,
        navOpen: false
      }
    case 'SET_FEATURED_CURRENT':
      return {
        ...state,
        featuredCurrent: payload
      }
    case 'INCREMENT_FEATURED_LOADED':
      return {
        ...state,
        featuredLoaded: state.featuredLoaded += 1
      }
    case 'ISOLATE_CATEGORY':
      return {
        ...state,
        navOpen: false,
        data: {
          ...state.data,
          [payload.pageName]: state.data[payload.pageName].sort((a, b) => (
            a.id === payload.id ? -1 : b.id === payload.id ? 1 : 0
          )).map(category => {
            category.open = category.id === payload.id
            return category
          })
        }
      }
    case 'RESET_CATEGORIES':
      return {
        ...state,
        navOpen: false,
        data: {
          ...state.data,
          [payload]: state.data[payload].sort((a, b) => (
            a.defaultIndex - b.defaultIndex
          )).map(category => {
            category.open = true
            return category
          })
        }
      }
    case 'TOGGLE_CATEGORY':
      return {
        ...state,
        data: {
          ...state.data,
          [payload.pageName]: state.data[payload.pageName].map(category => {
            if (category.id === payload.id) category.open = !category.open
            return category
          })
        }
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: payload
      }
    case 'ANIMATE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload
        }
      }
    case 'MARK_MODAL_READY':
      return {
        ...state,
        modal: {
          ...state.modal,
          ready: true
        }
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          open: false,
          ready: false,
          episode: false,
          episodeNumber: 0
        }
      }
    case 'CHANGE_DISPLAYED_TITLE':
      return {
        ...state,
        modal: {
          ...state.modal,
          displayedTitle: payload
        }
      }
    case 'PLAY_EPISODE':
      return {
        ...state,
        modal: {
          ...state.modal,
          episode: true,
          episodeNumber: payload
        }
      }
    case 'UPDATE_EPISODE_NUMBER':
      return {
        ...state,
        modal: {
          ...state.modal,
          episodeNumber: payload
        }
      }
    case 'CLOSE_EPISODE':
      return {
        ...state,
        modal: {
          ...state.modal,
          episode: false
        }
      }
    default:
      return state
  }
}