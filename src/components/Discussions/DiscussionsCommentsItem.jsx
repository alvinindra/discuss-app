import { postedAt } from '@/utils'
import Card from '../Base/Card/Card'
import { Interweave } from 'interweave'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  asyncDownVoteComment,
  asyncNeutralVoteComment,
  asyncUpVoteComment,
} from '@/states/discuss-detail/action'

export default function DiscussionsCommentsItem({
  commentId,
  name,
  avatar,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
}) {
  const auth = useSelector((states) => states.auth)
  const isUpVoted = upVotesBy.includes(auth?.id)
  const isDownVoted = downVotesBy.includes(auth?.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpVoteClick = (event) => {
    event.preventDefault()
    if (auth) {
      isUpVoted
        ? dispatch(asyncNeutralVoteComment(commentId))
        : dispatch(asyncUpVoteComment(commentId))
    } else {
      navigate('/login')
    }
  }

  const handleDownVoteClick = (event) => {
    event.preventDefault()
    if (auth) {
      isDownVoted
        ? dispatch(asyncNeutralVoteComment(commentId))
        : dispatch(asyncDownVoteComment(commentId))
    } else {
      navigate('/login')
    }
  }

  return (
    <Card className="border border-solid border-color-[#DADADA80] mb-5 last:mb-0">
      <div className="flex mb-4">
        <img src={avatar} className="rounded-full me-3 w-24px h-24px" alt="" />
        <div className="flex">
          <div className="my-auto text-3.5 font-medium">{name}</div>
        </div>
        <div className="ms-auto my-auto text-3.5 text-gray-500">{postedAt(createdAt)}</div>
      </div>
      <div className="mb-3 text-gray-600 text-3.5">
        <Interweave content={content} />
      </div>
      <div className="flex flex-row">
        <div className="flex cursor-pointer" onClick={handleUpVoteClick}>
          {isUpVoted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                fill="#66bd73"
              ></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
              ></path>
            </svg>
          )}
          <span className="ms-1 my-auto text-3 fw-500 mt-0.5">{upVotesBy?.length}</span>
        </div>
        <div className="flex mx-4 cursor-pointer" onClick={handleDownVoteClick}>
          {isDownVoted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649l-.063.293V14a2 2 0 0 0 2 2z"
                fill="#66bd73"
              ></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"
              ></path>
            </svg>
          )}

          <span className="ms-1 my-auto text-3 fw-500 mt-0.5">{downVotesBy?.length}</span>
        </div>
      </div>
    </Card>
  )
}

DiscussionsCommentsItem.propTypes = {
  commentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
}
