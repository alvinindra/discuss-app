import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './auth/reducer'
import usersReducer from './users/reducer'
import discussionsReducer from './discussions/reducer'
import discussDetailReducer from './discuss-detail/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
const store = configureStore({
  reducer: {
    auth: authUserReducer,
    users: usersReducer,
    discussions: discussionsReducer,
    discussDetail: discussDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
})

export default store
