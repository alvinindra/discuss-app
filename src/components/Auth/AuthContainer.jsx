import PropTypes from 'prop-types'
import FormLogin from './FormLogin/FormLogin'
import FormRegister from './FormRegister/FormRegister'

export default function AuthContainer({ isLoginDisplay, onLoginSuccess }) {
  return (
    <section className=" dark:bg-stone-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[75vh] lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-3xl font-semibold text-blue-400 dark:text-white"
        >
          Catatanku
        </a>
        {isLoginDisplay ? <FormLogin onLoginSuccess={onLoginSuccess} /> : <FormRegister />}
      </div>
    </section>
  )
}

AuthContainer.propTypes = {
  isLoginDisplay: PropTypes.bool.isRequired,
  onLoginSuccess: PropTypes.func,
}
