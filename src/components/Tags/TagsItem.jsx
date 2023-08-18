import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function TagsItem({ title, onClick, isActive = false }) {
  return (
    <button
      className={clsx(
        'me-2 last:me-0 bg-transparent rounded cursor-pointer hover:bg-black hover:text-white border-1 border-solid border-black',
        isActive && '!bg-black !text-white'
      )}
      onClick={onClick}
      type="button"
    >
      #{title}
    </button>
  )
}

TagsItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}
