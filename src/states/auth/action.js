import api from '@/utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_USER_AUTH: 'SET_USER_AUTH',
  UNSET_USER_AUTH: 'UNSET_USER_AUTH',
}

const setUserActionCreator = (userAuth) => {
  return {
    type: ActionType.SET_USER_AUTH,
    payload: {
      userAuth,
    },
  }
}

const unsetUserAuthActionCreator = () => {
  return {
    type: ActionType.UNSET_USER_AUTH,
  }
}

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const token = await api.login({ email, password })
      api.putAccessToken(token)

      const userAuth = await api.getOwnProfile()
      dispatch(setUserActionCreator(userAuth))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const asyncGetAuthUser = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const userAuth = await api.getOwnProfile()
      dispatch(setUserActionCreator(userAuth))
    } catch (error) {
      dispatch(setUserActionCreator(null))
    }
    dispatch(hideLoading())
  }
}

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetUserAuthActionCreator())
    api.putAccessToken('')
  }
}

export {
  ActionType,
  setUserActionCreator,
  unsetUserAuthActionCreator,
  asyncSetAuthUser,
  asyncGetAuthUser,
  asyncUnsetAuthUser,
}
