import { ActionType } from './action'

const authUserReducer = (authUser = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_USER_AUTH:
      return action.payload.userAuth
    case ActionType.UNSET_USER_AUTH:
      return null
    default:
      return authUser
  }
}

export default authUserReducer
