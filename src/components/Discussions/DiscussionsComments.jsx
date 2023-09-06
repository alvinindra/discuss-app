import Card from '@/components/Base/Card/Card'
import DiscussionsCommentsItem from './DiscussionsCommentsItem'
import PropTypes from 'prop-types'

export default function DiscussionsComments({ discussDetail }) {
  return (
    <Card className="my-8">
      <h4>Comments ({discussDetail?.comments.length})</h4>
      <DiscussionsCommentsItem />
      <DiscussionsCommentsItem />
    </Card>
  )
}

DiscussionsComments.propTypes = {
  threadDetail: PropTypes.object,
}
