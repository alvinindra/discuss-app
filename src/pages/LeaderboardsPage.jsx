import Card from '@/components/Base/Card/Card'
import HeaderBanner from '@/components/Base/HeaderBanner/HeaderBanner'
import MainLayout from '@/components/Layout/MainLayout'
import Navigation from '@/components/Navigation/Navigation'
import { asyncReceiveLeaderboards } from '@/states/leaderboards/action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function LeaderboardsPage() {
  const dispatch = useDispatch()
  const leaderboards = useSelector((states) => states.leaderboards)

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards())
  }, [dispatch])

  return (
    <MainLayout
      content={
        <>
          <HeaderBanner />
          <Card className="px-14 mt-5 mb-40px">
            <div className="text-center mb-5">
              <h2 className="mb-1">Leaderboards</h2>
              <div>Top 10 Discussion Users</div>
            </div>
            {leaderboards.length === 0 && (
              <div className="bg-light-200 p-8 rounded">
                Currently, there are no top 10 discussion users at the moment.
              </div>
            )}
            {leaderboards.map((leaderboard) => (
              <div key={leaderboard.user.id} className="flex mb-5">
                <img className="rounded-full me-3 w-48px h-48px" src={leaderboard.user.avatar} />
                <div className="text-14px my-auto">{leaderboard.user.name}</div>
                <strong className="ms-auto">{leaderboard.score}</strong>
              </div>
            ))}
          </Card>
        </>
      }
      sideContent={<Navigation />}
    />
  )
}

export default LeaderboardsPage
