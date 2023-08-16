import { useDispatch, useSelector } from 'react-redux'
import Card from '../Base/Card/Card'
import { asyncUnsetAuthUser } from '@/states/auth/action'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const isAuthenticated = localStorage.getItem('accessToken') || null
  const { auth } = useSelector((states) => states)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="flex flex-wrap">
      <Card className="mb-4 w-100">
        <div className="flex pb-4 border-b-1 border-0 border-solid mb-3 border-black">
          {isAuthenticated ? (
            <div className="flex flex-row">
              <img
                src={auth?.avatar}
                className="rounded-full me-3 w-36px h-36px"
                alt={auth?.name}
              />
              <div className="flex ms-auto me-3">
                <div className="my-auto font-medium">{auth?.name},</div>
              </div>
              <span
                className="my-auto underline cursor-pointer"
                onClick={() => dispatch(asyncUnsetAuthUser())}
              >
                Logout
              </span>
            </div>
          ) : (
            <span className="underline mx-auto cursor-pointer" onClick={() => navigate('/login')}>
              Login
            </span>
          )}
        </div>
        {location.pathname !== '/' && (
          <Link to="/" className="decoration-none text-black">
            <div className="font-medium text-center py-3 hover:bg-black hover:text-white border-rounded-2 transition-all">
              Home
            </div>
          </Link>
        )}
        <Link to="/leaderboards" className="decoration-none text-black">
          <div className="font-medium text-center py-3 hover:bg-black hover:text-white border-rounded-2 transition-all">
            Leaderboards
          </div>
        </Link>
      </Card>
      {location.pathname !== '/new' && (
        <Link
          to="/new"
          className="decoration-none bg-brand-primary w-100 border-0 py-3 border-rounded-2 text-white font-semibold text-center mb-4"
        >
          New Discussion
        </Link>
      )}
    </div>
  )
}
