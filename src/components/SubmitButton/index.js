import React from 'react'
import { Button } from './styles'

export function SubmitButton ({ children, onClick, disabled }) {
  return (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
  )
}
