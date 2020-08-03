import React from 'react'

import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <>
      <Layout title='Tus favoritos' subtitle='Encuentra fotos de animales'>
        <FavsWithQuery />
      </Layout>
    </>
  )
}
