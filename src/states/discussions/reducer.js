import { ActionType } from './action'

const discussionsReducer = (discussions = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.discussions
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...discussions]
    default:
      return discussions
  }
}

export default discussionsReducer
