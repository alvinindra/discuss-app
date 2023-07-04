import HeaderBanner from '@/components/Base/HeaderBanner/HeaderBanner.jsx'
import Discussions from '@/components/Discussions/Discussions'

function App() {
  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[78px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <HeaderBanner />
          <Discussions />
        </div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">Tag</div>
      </div>
    </div>
  )
}

export default App
