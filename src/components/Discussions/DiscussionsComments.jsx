import Card from '@/components/Base/Card/Card'
import DiscussionsCommentsItem from './DiscussionsCommentsItem'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { asyncAddComment } from '@/states/discuss-detail/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function DiscussionsComments({ discussDetail }) {
  const [comment, setComment] = useState('')
  const auth = useSelector((states) => states.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmitComment = (event) => {
    event.preventDefault()
    if (auth) {
      dispatch(asyncAddComment(comment))
      setComment('')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <Card className="my-6">
        <h4 className="mt-0">Leave a comment</h4>
        <form onSubmit={handleSubmitComment}>
          <div className="flex flex-col">
            <textarea
              className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your comment here"
              name="comment"
              rows={5}
              value={comment}
              required
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="ms-auto mt-6">
              <button
                type="submit"
                className="decoration-none bg-brand-primary w-100 border-0 py-3 border-rounded-2 text-white font-semibold text-center cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </Card>
      <Card className="my-6">
        <h4>Comments ({discussDetail?.comments.length})</h4>
        {discussDetail?.comments.map((comment) => (
          <DiscussionsCommentsItem
            key={comment.id}
            commentId={comment.id}
            name={comment.owner.name}
            avatar={comment.owner.avatar}
            content={comment.content}
            createdAt={comment.createdAt}
            upVotesBy={comment.upVotesBy}
            downVotesBy={comment.downVotesBy}
          />
        ))}
      </Card>
    </>
  )
}

DiscussionsComments.propTypes = {
  discussDetail: PropTypes.object,
}
