import React, { useContext } from 'react'

import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisteredMutation'
import { LoginMutation } from '../containers/LoginMutation'


export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema.'

            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Registrarse'
              />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { error, loading}) => {
            const onSubmit = ({ data, email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta.'

            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Iniciar Sesión'
              />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
