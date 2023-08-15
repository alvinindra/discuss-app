import { Link } from 'react-router-dom'

export default function FormRegister() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-gray-500">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register
        </h1>
        <form className="space-y-4 md:space-y-6">
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
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="John Doe"
              required
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
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@domain.com"
              required
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
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
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
              placeholder="••••••••"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
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
