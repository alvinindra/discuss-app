import DiscussionsComments from '@/components/Discussions/DiscussionsComments'
import DiscussionsDetail from '@/components/Discussions/DiscussionsDetail'
import MainLayout from '@/components/Layout/MainLayout'
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
    <MainLayout
      content={
        <>
          <DiscussionsDetail discussDetail={discussDetail} />
          <DiscussionsComments discussDetail={discussDetail} />
        </>
      }
      sideContent={<Navigation />}
    />
  )
}

export default DetailPage
