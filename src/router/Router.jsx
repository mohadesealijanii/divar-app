import { Navigate, Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import HomePage from 'pages/HomePage'
import DashboardPage from 'pages/DashboardPage'
import AuthPage from 'pages/AuthPage'
import AdminPage from 'pages/AdminPage'
import { getProfile } from 'services/user'
import Loader from 'components/modules/Loader'

function Router() {
  const { data, isLoading } = useQuery(['profile'], getProfile)
  // console.log({ data, isLoading, error })
  if (isLoading) return <Loader />

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route path="/auth" element={data ? <DashboardPage /> : <AuthPage />} />
      <Route
        path="/admin"
        element={
          data && data.data.role === 'ADMIN' ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  )
}

export default Router
