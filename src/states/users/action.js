import { toast } from 'react-toastify'
import api from '@/utils/api'
import { asyncSetAuthUser } from '../auth/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
}

const receiveUsersActionCreator = (users) => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  }
}

const asyncRegisterUser = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ name, email, password })
      dispatch(asyncSetAuthUser({ email, password }))
      toast.success('Berhasil mendaftarkan akun!')
    } catch (error) {
      toast.error(error.message)
    }
    dispatch(hideLoading())
  }
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser }
