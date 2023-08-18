import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/CreatePage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncGetAuthUser } from './states/auth/action'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((states) => states.auth)

  useEffect(() => {
    dispatch(asyncGetAuthUser())
  }, [dispatch])

  return (
    <Routes>
      <Route>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/discussions/:id" element={<DetailPage />}></Route>
        <Route path="/new" element={auth ? <CreatePage /> : <LoginPage />}></Route>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={auth ? <Navigate to="/" /> : <RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
