import Card from '@/components/Base/Card/Card'
import { postedAt } from '@/utils'
import { Interweave } from 'interweave'
import PropTypes from 'prop-types'
import DiscussionsVote from './DiscussionsVote'

export default function DiscussionsDetail({ discussDetail }) {
  return (
    <Card>
      <h1>{discussDetail?.title}</h1>
      <div className="flex my-3 w-min px-2 last:me-0 bg-transparent rounded border-1 border-solid border-black">
        #{discussDetail?.category}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="my-auto">Created by</div>
          <img
            src={discussDetail?.owner.avatar}
            className="rounded-full mx-2 w-20px my-auto h-20px"
            alt={discussDetail?.owner.name}
          />
          <strong className="text-gray-600 my-auto mt-0.30">{discussDetail?.owner.name}</strong>
        </div>
        <div className="my-auto">
          <span className="mx-2">•</span>
          <span>{postedAt(discussDetail?.createdAt)}</span>
        </div>
      </div>
      <hr />
      <div className="leading-20px">
        <Interweave content={discussDetail?.body} />
      </div>
      <hr />
      <DiscussionsVote
        discussId={discussDetail?.id || ''}
        upVotesBy={discussDetail?.upVotesBy || []}
        downVotesBy={discussDetail?.downVotesBy || []}
        isDiscussDetail
      />
    </Card>
  )
}

DiscussionsDetail.propTypes = {
  discussDetail: PropTypes.object,
}
