import { asyncUnsetAuthUser } from '@/states/auth/action'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function NavigationMobile() {
  const auth = useSelector((states) => states.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="block lg:hidden fixed bottom-0 left-0 right-0 shadow-[0_8px_20px_rgb(0,0,0,0.12)]">
      <nav className="grid grid-cols-3">
        <button
          type="button"
          className="bg-white border-0 items-center justify-center flex flex-col px-8px pt-16px pb-8px cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div
            className={clsx(
              'i-mdi:home-circle text-24px mb-2',
              location.pathname !== '/' && 'text-gray-500'
            )}
          ></div>
          <p className={clsx('my-0', location.pathname === '/' ? 'fw-600' : 'fw-400')}>Home</p>
        </button>
        <button
          type="button"
          className="bg-white border-0 items-center justify-center flex flex-col px-8px pt-16px pb-8px cursor-pointer"
          onClick={() => navigate('/leaderboards')}
        >
          <div
            className={clsx(
              'i-mdi:account-supervisor-circle-outline text-24px mb-2',
              location.pathname !== '/leaderboards' && 'text-gray-500'
            )}
          ></div>
          <p className={clsx('my-0', location.pathname === '/leaderboards' ? 'fw-600' : 'fw-400')}>
            Leaderboards
          </p>
        </button>
        {auth ? (
          <button
            type="button"
            className="bg-white border-0 items-center justify-center flex flex-col px-8px pt-16px pb-8px cursor-pointer"
            onClick={() => dispatch(asyncUnsetAuthUser())}
          >
            <div className="i-mdi:logout text-24px mb-2 text-gray-500"></div>
            <p className="my-0 fw-400">Logout</p>
          </button>
        ) : (
          <button
            type="button"
            className="bg-white border-0 items-center justify-center flex flex-col px-8px pt-16px pb-8px"
            onClick={() => navigate('/login')}
          >
            <div className="i-mdi:login text-24px mb-2 text-gray-500"></div>
            <p className="my-0 fw-400">Login</p>
          </button>
        )}
      </nav>
    </div>
  )
}
