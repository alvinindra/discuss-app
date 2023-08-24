import DiscussionsComments from '@/components/Discussions/DiscussionsComments'
import DiscussionsDetail from '@/components/Discussions/DiscussionsDetail'
import Navigation from '@/components/Navigation/Navigation'
import Tags from '@/components/Tags/Tags'
import { asyncReceiveDiscussDetail } from '@/states/discuss-detail/action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveDiscussDetail(id))
  }, [id, dispatch])

  const threadDetail = useSelector((states) => states.threadDetail)

  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <DiscussionsDetail threadDetail={threadDetail} />
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
