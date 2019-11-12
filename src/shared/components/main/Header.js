import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

if (process.env.WEBPACK) require('../../css/hamburger.css')

import { CMContext } from '../../store'
import {
  openNavigation,
  closeNavigation,
  isolateCategoryVideos,
  resetCategoriesVideos
} from '../../actions'

import Dropdown from './Dropdown'
import { SiteLogo, Hamburger, IMDbLogo, EmailIcon } from '../svg'

const Header = () => {
  const { navOpen, data, dispatch } = useContext(CMContext)
  const toggleNavigation = navOpen ? closeNavigation : openNavigation

  return (
    <header role="banner">
      <h1>
        <Link
          to="/"
          title="Home"
          onClick={() => dispatch(closeNavigation(true))}>
          <SiteLogo />
        </Link>
      </h1>
      <span aria-hidden="true">Film<br />Editor</span>
      <button
        onClick={() => dispatch(toggleNavigation())}
        aria-expanded={navOpen}
        title={`${navOpen ? 'Close' : 'Open'} navigation menu`}>
        <Hamburger />
      </button>
      <nav>
        <Link
          to="/"
          title="Reel"
          onClick={() => dispatch(closeNavigation(true))}>Reel</Link>
        <Link
          to="/resume"
          title="Résumé"
          onClick={() => dispatch(closeNavigation(true))}>Resume</Link>
        <Dropdown
          name="Videos"
          url="/videos"
          content={data.reference.allVideoCategories}
          isolateCategory={isolateCategoryVideos}
          resetCategories={resetCategoriesVideos} />
        <aside>
          <a
            href="https://www.imdb.com/name/nm2549237/"
            rel="external noopener noreferrer"
            target="_blank"
            title="Cris Mertens on IMDb">
            <IMDbLogo />
            <span>IMDb</span>
          </a>
        </aside>
        <address>
          <a href="mailto:crismertens@gmail.com" title="Email crismertens@gmail.com">
            <EmailIcon />
            <span>Email</span>
          </a>
        </address>
      </nav>
    </header>
  )
}

export default Header