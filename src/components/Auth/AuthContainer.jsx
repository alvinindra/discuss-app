import PropTypes from 'prop-types'

export default function AuthContainer({ formAuth }) {
  return (
    <section className=" bg-brand-secondary min-h-screen dark:bg-stone-800 flex">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-[75vh] lg:py-0 my-auto w-xl">
        <a
          href="/"
          className="flex items-center mb-6 text-4xl font-semibold text-brand-primary dark:text-white decoration-none"
        >
          Discuss App
        </a>
        {formAuth}
      </div>
    </section>
  )
}

AuthContainer.propTypes = {
  formAuth: PropTypes.element.isRequired,
}
