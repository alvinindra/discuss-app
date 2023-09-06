import api from '@/utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
}

const receiveLeaderboardsActionCreator = (leaderboards) => {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  }
}

const asyncReceiveLeaderboards = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const leaderboards = await api.getLeaderboards()
      dispatch(receiveLeaderboardsActionCreator(leaderboards))
    } catch (error) {
      toast.error(error.messsage)
    }
    dispatch(hideLoading())
  }
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards }
