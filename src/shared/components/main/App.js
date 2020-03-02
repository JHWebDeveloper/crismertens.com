import React from 'react'
import { renderRoutes } from 'react-router-config'

if (process.env.WEBPACK) {
  require('../../css/font.css')
  require('../../css/reset.css')
  require('../../css/index.css')
}

import { CMProvider } from '../../store'
import { ScrollHandlerProvider } from '../../store/ScrollHandler'
import Header from './Header'
import routes from '../../routes'
import Footer from './Footer'
import ModalLoader from '../modal/ModalLoader'

const App = () => (
  <ScrollHandlerProvider>
    <CMProvider>
      <Header />
      <main>
        {renderRoutes(routes)}
      </main>
      <Footer />
      <ModalLoader />
    </CMProvider>
  </ScrollHandlerProvider>
)

export default App
