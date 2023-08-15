import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './auth/reducer'
import usersReducer from './users/reducer'

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    users: usersReducer,
  },
})

export default store
