import PropTypes from 'prop-types'

export default function MainLayout({ content, sideContent }) {
  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">{content}</div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">{sideContent}</div>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  content: PropTypes.element.isRequired,
  sideContent: PropTypes.element.isRequired,
}
