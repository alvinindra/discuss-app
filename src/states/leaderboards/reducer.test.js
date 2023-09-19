/**
 * test scenario for talksReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_LEADERBOARDS action
 *
 */

import { describe, expect, it } from 'vitest'
import leaderboardsReducer from './reducer'

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = leaderboardsReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given by RECEIVE_LEADERBOARDS action', () => {
    const initialState = []
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        users: [
          {
            id: 'leonanta',
            name: 'Leonanta Pramudya',
            email: 'leonanta_pramudya@gmail.com',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
          {
            id: 'alvin',
            name: 'Alvin Indra',
            email: 'alvinindra@gmail.com',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
        ],
      },
    }

    const nextState = leaderboardsReducer(initialState, action)

    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
