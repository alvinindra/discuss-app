import Card from '@/components/Base/Card/Card'
import DiscussionsCommentsItem from './DiscussionsCommentsItem'
import PropTypes from 'prop-types'

export default function DiscussionsComments({ discussDetail }) {
  return (
    <Card className="my-8">
      <h4>Comments ({discussDetail?.comments.length})</h4>
      {discussDetail?.comments.map((comment) => (
        <DiscussionsCommentsItem
          key={comment.id}
          name={comment.owner.name}
          avatar={comment.owner.avatar}
          content={comment.content}
          createdAt={comment.createdAt}
          totalLike={comment.upVotesBy.length}
          totalDislike={comment.downVotesBy.length}
        />
      ))}
    </Card>
  )
}

DiscussionsComments.propTypes = {
  threadDetail: PropTypes.object,
}
