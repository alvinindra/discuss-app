import api from '@/utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const ActionType = {
  SET_DISCUSS_DETAIL: 'SET_DISCUSS_DETAIL',
  UNSET_DISCUSS_DETAIL: 'UNSET_DISCUSS_DETAIL',
  UP_VOTE_DISCUSS_DETAIL: 'UP_VOTE_DISCUSS_DETAIL',
  DOWN_VOTE_DISCUSS_DETAIL: 'DOWN_VOTE_DISCUSS_DETAIL',
  NEUTRAL_VOTE_DISCUSS_DETAIL: 'NEUTRAL_VOTE_DISCUSS_DETAIL',
  ADD_DISCUSS_COMMENT: 'ADD_DISCUSS_COMMENT',
  UP_VOTE_DISCUSS_COMMENT: 'UP_VOTE_DISCUSS_COMMENT',
  DOWN_VOTE_DISCUSS_COMMENT: 'DOWN_VOTE_DISCUSS_COMMENT',
  NEUTRAL_VOTE_DISCUSS_COMMENT: 'NEUTRAL_VOTE_DISCUSS_COMMENT',
}

const receiveDiscussDetailActionCreator = (discussDetail) => {
  return {
    type: ActionType.SET_DISCUSS_DETAIL,
    payload: {
      discussDetail,
    },
  }
}

const clearDiscussDetailActionCreator = () => {
  return {
    type: ActionType.UNSET_DISCUSS_DETAIL,
  }
}

const upVoteDiscussActionCreator = (userId) => {
  return {
    type: ActionType.UP_VOTE_DISCUSS_DETAIL,
    payload: {
      userId,
    },
  }
}

const downVoteDiscussActionCreator = (userId) => {
  return {
    type: ActionType.DOWN_VOTE_DISCUSS_DETAIL,
    payload: {
      userId,
    },
  }
}

const neutralVoteDiscussActionCreator = (userId) => {
  return {
    type: ActionType.NEUTRAL_VOTE_DISCUSS_DETAIL,
    payload: {
      userId,
    },
  }
}

const addCommentActionCreator = (comment) => {
  return {
    type: ActionType.ADD_DISCUSS_COMMENT,
    payload: {
      comment,
    },
  }
}

const upVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.UP_VOTE_DISCUSS_COMMENT,
    payload: {
      userId,
      commentId,
    },
  }
}

const downVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.DOWN_VOTE_DISCUSS_COMMENT,
    payload: {
      userId,
      commentId,
    },
  }
}

const neutralVoteCommentActionCreator = (userId, commentId) => {
  return {
    type: ActionType.NEUTRAL_VOTE_DISCUSS_COMMENT,
    payload: {
      userId,
      commentId,
    },
  }
}

const asyncReceiveDiscussDetail = (discussId) => {
  return async (dispatch) => {
    dispatch(showLoading())
    dispatch(clearDiscussDetailActionCreator())
    try {
      const discussDetail = await api.getThreadDetail(discussId)
      dispatch(receiveDiscussDetailActionCreator(discussDetail))
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncUpVoteDiscuss = (discussId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth } = getState()
    dispatch(upVoteDiscussActionCreator(auth.id))
    try {
      await api.upVoteThread(discussId)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncDownVoteDiscuss = (discussId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth } = getState()
    dispatch(downVoteDiscussActionCreator(auth.id))
    try {
      await api.downVoteThread(discussId)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncNeutralVoteDiscuss = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth, discussDetail } = getState()
    dispatch(neutralVoteDiscussActionCreator(auth.id))
    try {
      await api.neutralizeVoteThread(discussDetail.id)
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncAddComment = (content) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { discussDetail } = getState()
    try {
      const comment = await api.createThreadComment({ id: discussDetail.id, content })
      dispatch(addCommentActionCreator(comment))
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncUpVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth, discussDetail } = getState()
    dispatch(upVoteCommentActionCreator(auth.id, commentId))
    try {
      await api.upVoteComment({ discussId: discussDetail.id, commentId })
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncDownVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth, discussDetail } = getState()
    dispatch(downVoteCommentActionCreator(auth.id, commentId))
    try {
      await api.downVoteComment({ discussId: discussDetail.id, commentId })
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncNeutralVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { auth, discussDetail } = getState()
    dispatch(neutralVoteCommentActionCreator(auth.id, commentId))
    try {
      await api.neutralizeVoteComment({ discussId: discussDetail.id, commentId })
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveDiscussDetailActionCreator,
  clearDiscussDetailActionCreator,
  upVoteDiscussActionCreator,
  downVoteDiscussActionCreator,
  neutralVoteDiscussActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncReceiveDiscussDetail,
  asyncUpVoteDiscuss,
  asyncDownVoteDiscuss,
  asyncNeutralVoteDiscuss,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
}
