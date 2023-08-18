import Card from '@/components/Base/Card/Card'
import DiscussionsItem from './DiscussionsItem'
import PropTypes from 'prop-types'
export default function Discussions({ discussionsList }) {
  return (
    <Card className="my-6">
      {discussionsList.map((discuss) => (
        <DiscussionsItem
          key={discuss.id}
          id={discuss.id}
          title={discuss.title}
          name={discuss.user.name}
          avatar={discuss.user.avatar}
          body={discuss.body}
          category={discuss.category}
          totalComments={discuss.totalComments}
          totalLike={discuss.upVotesBy.length}
          totalDislike={discuss.downVotesBy.length}
        />
      ))}
    </Card>
  )
}

Discussions.propTypes = {
  discussionsList: PropTypes.array,
}
