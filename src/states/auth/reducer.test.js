/**
 * test scenario for talksReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import { describe, expect, it } from 'vitest'
import authUserReducer from './reducer'

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = authUserReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given by SET_USER_AUTH action', () => {
    const initialState = []
    const action = {
      type: 'SET_USER_AUTH',
      payload: {
        user: {
          id: 'leonanta',
          name: 'Leonanta Pramudya',
          email: 'leonanta_pramudya@gmail.com',
          avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
        },
      },
    }

    const nextState = authUserReducer(initialState, action)

    expect(nextState).toEqual(action.payload.userAuth)
  })

  it('should return the users when given by UNSET_USER_AUTH action', () => {
    const initialState = []
    const action = {
      type: 'UNSET_USER_AUTH',
    }

    const nextState = authUserReducer(initialState, action)

    expect(nextState).toEqual(null)
  })
})
