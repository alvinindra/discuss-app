import HeaderBanner from '@/components/Base/HeaderBanner/HeaderBanner.jsx'

function App() {
  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto py-[78px] min-h-100vh grid grid-cols-3">
        <div className="col-span-3 sm:col-span-2">
          <HeaderBanner />
          <p className="read-the-docs">This is example view of discuss app homepage</p>
        </div>
        <div className="col-span-3 ps-8 sm:col-span-1">Tag</div>
      </div>
    </div>
  )
}

export default App
