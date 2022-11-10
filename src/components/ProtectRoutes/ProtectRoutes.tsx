import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export const ProtectRoutes = () => {
  const { user } = useContext(UserContext)

  return user ? <Outlet/> : <Navigate to="/" replace/>
}
