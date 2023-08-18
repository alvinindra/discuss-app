import api from '@/utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
}

const receiveDiscussionsActionCreator = (discussions) => {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      discussions,
    },
  }
}

const addThreadActionCreator = (thread) => {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  }
}

const asyncAddThread = ({ title, body, category = '' }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { ActionType, receiveDiscussionsActionCreator, addThreadActionCreator, asyncAddThread }
