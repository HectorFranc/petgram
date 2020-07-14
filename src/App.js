import React from 'react'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}/>
          : <>
            <ListOfCategories path='/' />
            <ListOfPhotoCards />
          </>
      }
    </>
  )
}