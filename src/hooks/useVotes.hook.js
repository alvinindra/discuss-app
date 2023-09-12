import {
  asyncDownVoteDiscuss,
  asyncNeutralVoteDiscuss,
  asyncUpVoteDiscuss,
} from '@/states/discuss-detail/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function useVotes({ upVotesBy, downVotesBy }) {
  const auth = useSelector((states) => states.auth)
  const isUpVoted = upVotesBy.includes(auth?.id)
  const isDownVoted = downVotesBy.includes(auth?.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpVoteClick = () => {
    if (auth) {
      isUpVoted ? dispatch(asyncNeutralVoteDiscuss()) : dispatch(asyncUpVoteDiscuss())
    } else {
      navigate('/login')
    }
  }

  const handleDownVoteClick = () => {
    if (auth) {
      isDownVoted ? dispatch(asyncNeutralVoteDiscuss()) : dispatch(asyncDownVoteDiscuss())
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
