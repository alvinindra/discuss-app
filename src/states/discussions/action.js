import api from '@/utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_DISCUSSIONS: 'UP_VOTE_DISCUSSIONS',
  DOWN_VOTE_DISCUSSIONS: 'DOWN_VOTE_DISCUSSIONS',
  NEUTRAL_VOTE_DISCUSSIONS: 'NEUTRAL_VOTE_DISCUSSIONS',
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

const upVoteDiscussionsActionCreator = (userId, discussId) => {
  return {
    type: ActionType.UP_VOTE_DISCUSSIONS,
    payload: {
      userId,
      discussId,
    },
  }
}

const downVoteDiscussionsActionCreator = (userId, discussId) => {
  return {
    type: ActionType.DOWN_VOTE_DISCUSSIONS,
    payload: {
      userId,
      discussId,
    },
  }
}

const neutralVoteDiscussionsActionCreator = (userId, discussId) => {
  return {
    type: ActionType.NEUTRAL_VOTE_DISCUSSIONS,
    payload: {
      userId,
      discussId,
    },
  }
}

const asyncAddThread = ({ title, body, category = '' }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
      toast.success('Discussion successfully created!')
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncUpVoteDiscussions = (discussId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth } = getState()
    dispatch(upVoteDiscussionsActionCreator(auth.id, discussId))
    try {
      await api.upVoteThread(discussId)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncDownVoteDiscussions = (discussId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth } = getState()
    dispatch(downVoteDiscussionsActionCreator(auth.id, discussId))
    try {
      await api.downVoteThread(discussId)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncNeutralVoteDiscussions = (discussId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth } = getState()
    dispatch(neutralVoteDiscussionsActionCreator(auth.id, discussId))
    try {
      await api.neutralizeVoteThread(discussId)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveDiscussionsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncUpVoteDiscussions,
  asyncDownVoteDiscussions,
  asyncNeutralVoteDiscussions,
}
