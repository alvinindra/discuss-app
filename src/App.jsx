import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/CreatePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncGetAuthUser } from './states/auth/action'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = localStorage.getItem('accessToken') || null

  useEffect(() => {
    dispatch(asyncGetAuthUser())
  }, [dispatch])

  return (
    <Routes>
      <Route>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/discussions/:id" element={<DetailPage />}></Route>
        <Route path="/new" element={<CreatePage />}></Route>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
