/**
 * test scenario for talksReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import { describe, expect, it } from 'vitest'
import usersReducer from './reducer'

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given by RECEIVE_USERS action', () => {
    const initialState = []
    const action = {
      type: 'RECEIVE_USERS',
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

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(action.payload.users)
  })
})
