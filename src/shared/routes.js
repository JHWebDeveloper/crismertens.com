import React from 'react'
import { Redirect } from 'react-router-dom'

import Root from './components/main/Root'
import Reel from './components/reel/Reel'
import ModalURLLoader from './components/modal/ModalURLLoader'
import Resume from './components/resume/Resume'
import Videos from './components/videos/Videos'
import NotFound from './components/misc/NotFound'

const title = 'Cris Mertens | Film Editor'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Redirect from="/" exact to="/reel" />
      },
      {
        path: '/reel',
        title,
        component: Reel,
        routes: [
          {
            path: '/reel/:title/:id?',
            component: ModalURLLoader
          }
        ]
      },
      {
        path: '/resume',
        alternate: '/downloads/cris-mertens-resume.pdf',
        title: `${title} | Résumé`,
        component: Resume
      },
      {
        path: '/videos',
        title: `${title} | Videos`,
        component: Videos,
        routes: [
          {
            path: '/videos/:title/:id?',
            component: ModalURLLoader
          }
        ]
      },
      {
        path: '*',
        title: `Error! | ${title}`,
        component: NotFound
      }
    ]
  }
]

export default routes