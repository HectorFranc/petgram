import React, { useContext, Suspense } from 'react'

import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { NotFound } from './pages/NotFound'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router, Redirect } from '@reach/router'

import { Context } from './Context'


const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />

      <Logo />

      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />

        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <User path='/user' />
        <Favs path='/favs' />
      </Router>

      <NavBar />
    </Suspense>
  )
}
