import { ActionType } from './action'

const discussionsReducer = (discussions = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.discussions
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...discussions]
    case ActionType.UP_VOTE_DISCUSSIONS:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussId) {
          return {
            ...discussion,
            upVotesBy: discussion.upVotesBy.includes(action.payload.userId)
              ? discussion.upVotesBy.filter((id) => id !== action.payload.userId)
              : discussion.upVotesBy.concat(action.payload.userId),
            downVotesBy: discussion.downVotesBy.filter((id) => id !== action.payload.userId),
          }
        }
        return discussion
      })
    case ActionType.DOWN_VOTE_DISCUSSIONS:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussId) {
          return {
            ...discussion,
            upVotesBy: discussion.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: discussion.downVotesBy.includes(action.payload.userId)
              ? discussion.downVotesBy.filter((id) => id !== action.payload.userId)
              : discussion.downVotesBy.concat(action.payload.userId),
          }
        }
        return discussion
      })
    case ActionType.NEUTRAL_VOTE_DISCUSSIONS:
      return discussions.map((discussion) => {
        if (discussion.id === action.payload.discussId) {
          return {
            ...discussion,
            upVotesBy: discussion.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: discussion.downVotesBy.filter((id) => id !== action.payload.userId),
          }
        }
        return discussion
      })
    default:
      return discussions
  }
}

export default discussionsReducer
