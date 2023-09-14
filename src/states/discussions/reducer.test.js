/**
 * test scenario for discussionsReducer
 *
 * - discussionsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the discussions when given by RECEIVE_THREADS action
 *  - should return the discussions with the new thread when given by ADD_THREAD action
 *  - should return the discussions with upVotesBy that contain alvin inside it when given by UP_VOTE_DISCUSSIONS action
 *  - should return the discussions with downVotesBy that contain alvin inside it when given by DOWN_VOTE_DISCUSSIONS action
 *  - should return the discussions with upVotesBy and downVotesBy that doesn't contain alvin inside it when given by NEUTRAL_VOTE_DISCUSSIONS action
 */

import { describe, expect, it } from 'vitest'
import discussionsReducer from './reducer'

describe('discussionsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = discussionsReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the discussions when given by RECEIVE_THREADS action', () => {
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'discuss-1',
            title: 'First Discussion',
            body: 'This is first discussion',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'discuss-2',
            title: 'Second Discussion',
            body: 'This is second discussion',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    }

    const nextState = discussionsReducer(initialState, action)

    expect(nextState).toEqual(action.payload.discussions)
  })

  it('should return the discussions with the new discussion when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'discuss-1',
        title: 'First Discussion',
        body: 'This is first discussion',
        category: 'General',
        createdAt: '2023-09-14T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ]

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'discuss-2',
          title: 'Second Discussion',
          body: 'This is second discussion',
          category: 'General',
          createdAt: '2023-09-14T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    }

    const nextState = discussionsReducer(initialState, action)

    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })

  it('should return the discussions with upVotesBy that contain alvin inside it when given by UP_VOTE_DISCUSSIONS action', () => {
    const initialState = [
      {
        id: 'discuss-1',
        title: 'First Discussion',
        body: 'This is first discussion',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'leonanta',
          name: 'Leonanta',
          avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
        },
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ]
    const action = {
      type: 'UP_VOTE_DISCUSSIONS',
      payload: {
        discussId: 'discuss-1',
        userId: 'alvin',
      },
    }

    const nextState = discussionsReducer(initialState, action)
    const findedState = nextState.find((state) => state.id === action.payload.discussId)

    expect(findedState.upVotesBy).toContain(action.payload.userId)
    expect(findedState.downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the discussions with downVotesBy that contain alvin inside it when given by DOWN_VOTE_DISCUSSIONS action', () => {
    const initialState = [
      {
        id: 'discuss-1',
        title: 'First Discussion',
        body: 'This is first discussion',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'leonanta',
          name: 'Leonanta',
          avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
        },
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ]
    const action = {
      type: 'DOWN_VOTE_DISCUSSIONS',
      payload: {
        discussId: 'discuss-1',
        userId: 'alvin',
      },
    }

    const nextState = discussionsReducer(initialState, action)
    const findedState = nextState.find((state) => state.id === action.payload.discussId)

    expect(findedState.downVotesBy).toContain(action.payload.userId)
    expect(findedState.upVotesBy).not.toContain(action.payload.userId)
  })

  it("should return the discussions with upVotesBy and downVotesBy that doesn't contain alvin inside it when given by NEUTRAL_VOTE_DISCUSSIONS action", () => {
    const initialState = [
      {
        id: 'discuss-1',
        title: 'First Discussion',
        body: 'This is first discussion',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'leonanta',
          name: 'Leonanta',
          avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
        },
        upVotesBy: ['alvin'],
        downVotesBy: [],
        totalComments: 0,
      },
    ]
    const action = {
      type: 'NEUTRAL_VOTE_DISCUSSIONS',
      payload: {
        discussId: 'discuss-1',
        userId: 'alvin',
      },
    }

    const nextState = discussionsReducer(initialState, action)
    const findedState = nextState.find((state) => state.id === action.payload.discussId)

    expect(findedState.upVotesBy).not.toContain(action.payload.userId)
    expect(findedState.downVotesBy).not.toContain(action.payload.userId)
  })
})
