import { Link } from 'react-router-dom'

export default function FormLogin() {
  return (
    <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Login
        </h1>
        <form className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder={'Masukkan email'}
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
          <button
            type="submit"
            className="w-full text-white bg-brand-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none cursor-pointer"
          >
            Submit
          </button>
          <p className="text-sm font-light text-gray-500">
            Belum punya akun?&nbsp;
            <Link to="/register" className="font-medium hover:underline text-blue-400">
              Registrasi
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
