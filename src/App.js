import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

import { GlobalStyles } from './GlobalStyles'

export const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories path='/' />
    <ListOfPhotoCards />
  </>
)
