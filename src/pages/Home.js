import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Tu app de fotos de animales' subtitle='Encuentra fotos de animales'>
      <ListOfCategories path='/' />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
