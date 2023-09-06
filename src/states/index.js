import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './auth/reducer'
import usersReducer from './users/reducer'
import discussionsReducer from './discussions/reducer'
import leaderboardsReducer from './leaderboards/reducer'

const store = configureStore({
  reducer: {
    auth: authUserReducer,
    users: usersReducer,
    discussions: discussionsReducer,
    leaderboards: leaderboardsReducer,
  },
})

export default store
