import Card from '../Base/Card/Card'
import PropTypes from 'prop-types'
import { Interweave } from 'interweave'
import { postedAt } from '@/utils'
import { Link } from 'react-router-dom'

export default function DiscussionsItem({
  id,
  title,
  name,
  avatar,
  createdAt,
  totalComments,
  category,
  body,
  totalLike,
  totalDislike,
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
          <div className="flex flex-row me-3">
            <div className="flex cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
                ></path>
              </svg>
              <span className="ms-1 my-auto text-3 fw-500 mt-0.5">{totalLike}</span>
            </div>
            <div className="flex ms-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"
                ></path>
              </svg>
              <span className="ms-1 my-auto text-3 fw-500 mt-0.5">{totalDislike}</span>
            </div>
          </div>
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
  totalLike: PropTypes.number,
  totalDislike: PropTypes.number,
}
