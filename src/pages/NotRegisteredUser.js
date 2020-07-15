import React from 'react'

import Context from '../Context'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) => {
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                activateAuth()
              }}
            >
              <button>Iniciar Sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
