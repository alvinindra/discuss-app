import {
  asyncDownVoteDiscuss,
  asyncNeutralVoteDiscuss,
  asyncUpVoteDiscuss,
} from '@/states/discuss-detail/action'
import {
  asyncDownVoteDiscussions,
  asyncNeutralVoteDiscussions,
  asyncUpVoteDiscussions,
} from '@/states/discussions/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function useVotes({ upVotesBy, downVotesBy, discussId, isDiscussDetail }) {
  const auth = useSelector((states) => states.auth)
  const isUpVoted = upVotesBy.includes(auth?.id)
  const isDownVoted = downVotesBy.includes(auth?.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpVoteClick = (event) => {
    event.preventDefault()
    if (auth) {
      if (isUpVoted) {
        isDiscussDetail
          ? dispatch(asyncNeutralVoteDiscuss(discussId))
          : dispatch(asyncNeutralVoteDiscussions(discussId))
      } else {
        isDiscussDetail
          ? dispatch(asyncUpVoteDiscuss(discussId))
          : dispatch(asyncUpVoteDiscussions(discussId))
      }
    } else {
      navigate('/login')
    }
  }

  const handleDownVoteClick = (event) => {
    event.preventDefault()
    if (auth) {
      if (isDownVoted) {
        isDiscussDetail
          ? dispatch(asyncNeutralVoteDiscuss(discussId))
          : dispatch(asyncNeutralVoteDiscussions(discussId))
      } else {
        isDiscussDetail
          ? dispatch(asyncDownVoteDiscuss(discussId))
          : dispatch(asyncDownVoteDiscussions(discussId))
      }
    } else {
      navigate('/login')
    }
  }

  return {
    isUpVoted,
    isDownVoted,
    handleUpVoteClick,
    handleDownVoteClick,
  }
}
