import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Card({ className, children }) {
  return <div className={clsx(className, 'bg-white p-6 border-rounded-2')}>{children}</div>
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
}
