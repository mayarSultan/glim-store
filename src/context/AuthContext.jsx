import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('glim_user')) || null
  )
  const [token, setToken] = useState(
    localStorage.getItem('glim_token') || null
  )

  function saveAuth(userData, tokenData) {
    setUser(userData)
    setToken(tokenData)
    localStorage.setItem('glim_user', JSON.stringify(userData))
    localStorage.setItem('glim_token', tokenData)
  }

  function logout() {
    setUser(null)
    setToken(null)
    localStorage.removeItem('glim_user')
    localStorage.removeItem('glim_token')
  }

  return (
    <AuthContext.Provider value={{ user, token, saveAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}