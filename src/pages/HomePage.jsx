import HeaderBanner from '@/components/Base/HeaderBanner/HeaderBanner.jsx'
import Discussions from '@/components/Discussions/Discussions'
import MainLayout from '@/components/Layout/MainLayout'
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
    const uniqueCategories = new Set(discussions.map((thread) => thread.category))
    setTags(Array.from(uniqueCategories))
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
          user: users?.find((user) => user.id === discuss.ownerId),
          authUser: auth ? auth.id : null,
        }
      })
  }, [auth, discussions, selectedCategory, users])

  return (
    <MainLayout
      content={
        <>
          <HeaderBanner />
          <Discussions discussionsList={discussionsList} />
        </>
      }
      sideContent={
        <>
          <Navigation />
          <Tags
            tags={tags}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </>
      }
    />
  )
}

export default HomePage
