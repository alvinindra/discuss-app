import { asyncRegisterUser } from '@/states/users/action'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function FormRegister() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialFormRegister = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const [formRegister, setFormRegister] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialFormRegister
  )

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormRegister({ [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formRegister.password !== formRegister.passwordConfirm) {
      toast.error('Your password is not match!', 'danger')
    } else {
      dispatch(asyncRegisterUser({ ...formRegister }))
      navigate('/')
    }
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border lg:mt-0 lg:max-w-md xl:p-0 dark:bg-stone-800 dark:border-gray-500">
      <div className="p-6 space-y-4 lg:space-y-6 lg:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl dark:text-white">
          Register
        </h1>
        <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              placeholder="Leonanta Pramudya"
              required
              onChange={handleFormChange}
            />
          </div>
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
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@domain.com"
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
              placeholder="Your Password"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              required
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Your Password"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              required
              onChange={handleFormChange}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-brand-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none cursor-pointer"
          >
            Register
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?&nbsp;
            <Link to="/login" className="font-medium text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
