import React from 'react'

import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisteredMutation'


export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(
                        activateAuth()
                      )
                    }
                    return (
                      <UserForm
                        onSubmit={onSubmit}
                        title='Registrarse'
                      />
                    )
                  }
                }
              </RegisterMutation>

              <UserForm
                onSubmit={(e) => {
                  e.preventDefault()
                  activateAuth()
                }}
                title='Iniciar Sesión'
              />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
