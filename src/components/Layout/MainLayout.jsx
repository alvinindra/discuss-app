import PropTypes from 'prop-types'

export default function MainLayout({ content, sideContent }) {
  return (
    <div className="bg-brand-secondary">
      <div className="lg:container mx-auto pt-[48px] min-h-100vh grid grid-cols-4 pb-150px lg:pb-0">
        <div className="lg:col-span-3 col-span-4 px-4">{content}</div>
        <div className="lg:col-span-1 col-span-4 px-4 lg:ps-4 lg:ps-8 lg:pe-8">{sideContent}</div>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  content: PropTypes.element.isRequired,
  sideContent: PropTypes.element.isRequired,
}
