import api from '../../utils/api'
import { receiveUsersActionCreator } from '../users/action'
import { receiveDiscussionsActionCreator } from '../discussions/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const asyncPopulateUsersAndDiscussions = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const users = await api.getAllUsers()
      const discussions = await api.getAllDiscussions()

      dispatch(receiveUsersActionCreator(users))
      dispatch(receiveDiscussionsActionCreator(discussions))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { asyncPopulateUsersAndDiscussions }
