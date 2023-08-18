import DiscussionsComments from '@/components/Discussions/DiscussionsComments'
import DiscussionsDetail from '@/components/Discussions/DiscussionsDetail'
import Navigation from '@/components/Navigation/Navigation'
import Tags from '@/components/Tags/Tags'

function DetailPage() {
  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <DiscussionsDetail />
          <DiscussionsComments />
        </div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">
          <Navigation />
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
