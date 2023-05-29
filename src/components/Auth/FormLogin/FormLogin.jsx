import PropTypes from 'prop-types'
import LocaleContext from '@/contexts/LocaleContext'
import { useContext, useReducer } from 'react'
import { toast } from 'react-toastify'
import { login } from '@/api/auth'
import { Link } from 'react-router-dom'
import { LoginLocale } from '@/locale/auth-locale'

export default function FormLogin({ onLoginSuccess }) {
  const { locale } = useContext(LocaleContext)

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

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormLogin({ [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error, message, data } = await login(formLogin)
    if (!error) onLoginSuccess(data)
    else toast.error(message)
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-gray-500">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {LoginLocale[locale].title}
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={LoginLocale[locale].placeholderEmail}
              required
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {LoginLocale[locale].labelPassword}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleFormChange}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {LoginLocale[locale].submit}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {LoginLocale[locale].forgot}&nbsp;
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              {LoginLocale[locale].register}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

FormLogin.propTypes = {
  onLoginSuccess: PropTypes.func,
}
