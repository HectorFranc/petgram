import React from 'react'

import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router } from '@reach/router'

import Context from './Context'


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />

      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? <Router>
              <User path='/user' />
              <Favs path='/favs' />
            </Router>
            : <Router>
              <NotRegisteredUser path='/user' />
              <NotRegisteredUser path='/favs' />
            </Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
