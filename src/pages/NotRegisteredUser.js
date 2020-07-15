import React from 'react'

import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) => {
          return (
            <UserForm
              onSubmit={(e) => {
                e.preventDefault()
                activateAuth()
              }}
            />
          )
        }
      }
    </Context.Consumer>
  )
}
