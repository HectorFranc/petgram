import React from 'react'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

import PropTypes from 'prop-types'

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.proptypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
