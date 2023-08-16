import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Card({ className, children, onClick = null }) {
  return (
    <div className={clsx(className, 'bg-white p-6 border-rounded-2')} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  onClick: PropTypes.func,
}
