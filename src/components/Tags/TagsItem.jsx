import PropTypes from 'prop-types'

export default function TagsItem({ title }) {
  return (
    <button className="me-2 last:me-0 bg-transparent rounded cursor-pointer hover:bg-black hover:text-white border-1 border-solid border-black">
      {title}
    </button>
  )
}

TagsItem.propTypes = {
  title: PropTypes.string.isRequired,
}
