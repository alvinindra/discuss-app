import { ActionType } from './action'

const discussDetailReducer = (discussDetail = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_DISCUSS_DETAIL:
      return action.payload.discussDetail
    case ActionType.UNSET_DISCUSS_DETAIL:
      return null
    case ActionType.UP_VOTE_DISCUSS_DETAIL:
      return {
        ...discussDetail,
        upVotesBy: discussDetail.upVotesBy.includes(action.payload.userId)
          ? discussDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : discussDetail.upVotesBy.concat(action.payload.userId),
        downVotesBy: discussDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      }
    case ActionType.DOWN_VOTE_DISCUSS_DETAIL:
      return {
        ...discussDetail,
        upVotesBy: discussDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: discussDetail.downVotesBy.includes(action.payload.userId)
          ? discussDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : discussDetail.downVotesBy.concat(action.payload.userId),
      }
    case ActionType.NEUTRAL_VOTE_DISCUSS_DETAIL:
      return {
        ...discussDetail,
        upVotesBy: discussDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: discussDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      }
    case ActionType.ADD_DISCUSS_COMMENT:
      return {
        ...discussDetail,
        comments: [action.payload.comment, ...discussDetail.comments],
      }
    case ActionType.UP_VOTE_DISCUSS_COMMENT:
      return {
        ...discussDetail,
        comments: discussDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy.concat(action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            }
          }
          return comment
        }),
      }
    case ActionType.DOWN_VOTE_DISCUSS_COMMENT:
      return {
        ...discussDetail,
        comments: discussDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : comment.downVotesBy.concat(action.payload.userId),
            }
          }
          return comment
        }),
      }
    case ActionType.NEUTRAL_VOTE_DISCUSS_COMMENT:
      return {
        ...discussDetail,
        comments: discussDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            }
          }
          return comment
        }),
      }
    default:
      return discussDetail
  }
}

export default discussDetailReducer
