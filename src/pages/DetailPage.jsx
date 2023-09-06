import DiscussionsComments from '@/components/Discussions/DiscussionsComments'
import DiscussionsDetail from '@/components/Discussions/DiscussionsDetail'
import Navigation from '@/components/Navigation/Navigation'
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

  const discussDetail = useSelector((states) => states.discussDetail)

  return (
    <div className="bg-brand-secondary">
      <div className="sm:container sm:px-4 mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <DiscussionsDetail discussDetail={discussDetail} />
          <DiscussionsComments discussDetail={discussDetail} />
        </div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
