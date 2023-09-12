import Card from '@/components/Base/Card/Card'
import DiscussionsItem from './DiscussionsItem'
import PropTypes from 'prop-types'
export default function Discussions({ discussionsList }) {
  return (
    <Card className="px-3 lg:px-6 my-6">
      {discussionsList.map((discuss) => (
        <DiscussionsItem
          key={discuss.id}
          id={discuss.id}
          title={discuss.title}
          name={discuss.user?.name}
          avatar={discuss.user?.avatar}
          body={discuss.body}
          createdAt={discuss.createdAt}
          category={discuss.category}
          totalComments={discuss.totalComments}
          upVotesBy={discuss.upVotesBy}
          downVotesBy={discuss.downVotesBy}
        />
      ))}
    </Card>
  )
}

Discussions.propTypes = {
  discussionsList: PropTypes.array,
}
