import Card from '../Base/Card/Card'
import PropTypes from 'prop-types'
import { Interweave } from 'interweave'
import { postedAt } from '@/utils'
import { Link } from 'react-router-dom'
import DiscussionsVote from './DiscussionsVote'

export default function DiscussionsItem({
  id,
  title,
  name,
  avatar,
  createdAt,
  totalComments,
  category,
  body,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <Card className="border border-solid border-color-[#DADADA80] mb-5 last:mb-0 cursor-pointer hover:bg-light-300 px-4 lg:px-6">
      <Link to={`/discussions/${id}`} className="no-underline text-inherit">
        <div className="flex flex-wrap lg:flex-row mb-3 gap-3">
          <div className="font-bold my-auto text-3.5 lg:text-4 lg:mb-auto">{title}</div>
          <button
            className="lg:mt-0 lg:ms-2 my-auto last:me-0 bg-transparent rounded cursor-pointer border-1 border-solid border-black"
            type="button"
          >
            #{category}
          </button>
        </div>
        <div className="flex mb-4">
          <img src={avatar} className="rounded-full me-2 lg:me-3 w-36px h-36px" alt="" />
          <div className="flex">
            <div className="my-auto text-3 lg:text-3.5 font-medium">{name}</div>
          </div>
          <div className="ms-auto my-auto text-3 lg:text-3.5 text-gray-500 ">
            {postedAt(createdAt)}
          </div>
        </div>
        <div className="mb-3 text-gray-600 text-3.5 line-clamp-4 leading-20px">
          <Interweave content={body} />
        </div>
        <div className="flex">
          <DiscussionsVote upVotesBy={upVotesBy} downVotesBy={downVotesBy} discussId={id} />
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99998 9.57442H9.33331V8.24109H3.99998V9.57442ZM3.99998 7.57442H12V6.24109H3.99998V7.57442ZM3.99998 5.57442H12V4.24109H3.99998V5.57442ZM1.33331 14.9078V2.90776C1.33331 2.54109 1.46398 2.22709 1.72531 1.96576C1.9862 1.70487 2.29998 1.57442 2.66665 1.57442H13.3333C13.7 1.57442 14.014 1.70487 14.2753 1.96576C14.5362 2.22709 14.6666 2.54109 14.6666 2.90776V10.9078C14.6666 11.2744 14.5362 11.5884 14.2753 11.8498C14.014 12.1106 13.7 12.2411 13.3333 12.2411H3.99998L1.33331 14.9078Z"
              fill="#34364A"
            />
          </svg>
          <span className="ms-2 text-3">{totalComments} &nbsp;Comments</span>
        </div>
      </Link>
    </Card>
  )
}

DiscussionsItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.string,
  totalComments: PropTypes.number,
  category: PropTypes.string,
  body: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
}
