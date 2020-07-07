import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key)
      return storedValue !== null ? JSON.parse(storedValue) : initialValue
    } catch (err) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setLocalStorage]
}
