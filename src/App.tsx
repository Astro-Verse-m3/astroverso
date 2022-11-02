import React from 'react'
import { UserProvider } from './contexts/UserContext'
import { MainRoutes } from './routes/Routes'

export const App = () => {
  return (
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  )
}


