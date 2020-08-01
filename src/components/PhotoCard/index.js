import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'

import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

import { Img, ImgWrapper, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'


export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()


  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: { input: { id } }
                  })
                }
                return <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>}
    </Article>
  )
}
