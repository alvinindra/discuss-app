import { postedAt } from '@/utils'
import Card from '../Base/Card/Card'
import { Interweave } from 'interweave'
import PropTypes from 'prop-types'
import DiscussionsVote from './DiscussionsVote'

export default function DiscussionsCommentsItem({
  name,
  avatar,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
}) {
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
      <DiscussionsVote upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
    </Card>
  )
}

DiscussionsCommentsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
}
