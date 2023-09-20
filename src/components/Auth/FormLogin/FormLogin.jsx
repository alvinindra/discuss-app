import { asyncSetAuthUser } from '@/states/auth/action'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function FormLogin() {
  const initialFormLogin = {
    email: '',
    password: '',
  }

  const [formLogin, setFormLogin] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialFormLogin
  )

  const dispatch = useDispatch()

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormLogin({ [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    dispatch(asyncSetAuthUser({ ...formLogin }))
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md dark:border lg:mt-0 lg:max-w-md xl:p-0">
      <div className="p-6 space-y-4 lg:space-y-6 lg:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl">
          Login
        </h1>
        <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Email"
              required
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              required
              onChange={handleFormChange}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-brand-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none cursor-pointer"
          >
            Submit
          </button>
          <p className="text-sm font-light text-gray-500">
            {"Don't have an account yet?"}&nbsp;
            <Link to="/register" className="font-medium hover:underline text-blue-400">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
