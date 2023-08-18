import HeaderBanner from '@/components/Base/HeaderBanner/HeaderBanner.jsx'
import Discussions from '@/components/Discussions/Discussions'
import Navigation from '@/components/Navigation/Navigation'
import Tags from '@/components/Tags/Tags'
import { asyncPopulateUsersAndDiscussions } from '@/states/shared/action'
import { useMemo } from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function HomePage() {
  const auth = useSelector((states) => states.auth)
  const discussions = useSelector((states) => states.discussions)
  const users = useSelector((states) => states.users)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [tags, setTags] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndDiscussions())
  }, [dispatch])

  useEffect(() => {
    setTags(discussions?.map((thread) => thread.category))
  }, [discussions])

  const discussionsList = useMemo(() => {
    return discussions
      ?.filter((discuss) => {
        if (selectedCategory !== 'all') return discuss.category === selectedCategory
        return discuss
      })
      .map((discuss) => {
        return {
          ...discuss,
          user: users.find((user) => user.id === discuss.ownerId),
          authUser: auth ? auth.id : null,
        }
      })
  }, [auth, discussions, selectedCategory, users])

  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <HeaderBanner />
          <Discussions discussionsList={discussionsList} />
        </div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">
          <Navigation />
          <Tags
            tags={tags}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
