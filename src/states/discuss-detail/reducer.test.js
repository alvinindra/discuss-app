/**
 * test scenario for discussDetailReducer
 *
 * - discussDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the discussion detail when given by SET_DISCUSS_DETAIL action
 *  - should return null when given by UNSET_DISCUSS_DETAIL action
 *  - should return the discussion detail with upVotesBy that contain alex-4ger inside it when given by UP_VOTE_DISCUSS_DETAIL action
 *  - should return the discussion detail with downVotesBy that contain alex-4ger inside it when given by DOWN_VOTE_DISCUSS_DETAIL action
 *  - should return the discussion detail with upVotesBy and downVotesBy that doesn't contain alex-4ger inside it when given by NEUTRAL_VOTE_DISCUSS_DETAIL action
 *  - should return the discussion detail with new comment when given by ADD_DISCUSS_COMMENT action
 *  - should return the discussion detail with comments and upVotesBy that contain alex-4ger inside it when given by UP_VOTE_DISCUSS_COMMENT action
 *  - should return the discussion detail with comments and downVotesBy that contain alex-4ger inside it when given by DOWN_VOTE_DISCUSS_COMMENT action
 *  - should return the discussion detail with comments, upVotesBy and downVotesBy that doesn't contain alex-4ger inside it when given by NEUTRAL_VOTE_DISCUSS_COMMENT action
 *
 */

import { describe, expect, it } from 'vitest'
import discussDetailReducer from './reducer'

describe('discussDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the discussion detail when given by SET_DISCUSS_DETAIL action', () => {
    const initialState = []
    const action = {
      type: 'SET_DISCUSS_DETAIL',
      payload: {
        discussDetail: {
          id: 'discuss-1',
          title: 'First Discussion',
          body: 'This is first discussion',
          category: 'General',
          createdAt: '2023-09-14T07:00:00.000Z',
          owner: {
            id: 'leonanta',
            name: 'Leonanta',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'This is my first comment',
              createdAt: '2023-09-14T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'Alexander',
                avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState).toEqual(action.payload.discussDetail)
  })

  it('should return null when given by UNSET_DISCUSS_DETAIL action', () => {
    const initialState = []
    const action = { type: 'UNSET_DISCUSS_DETAIL' }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState).toEqual(null)
  })

  it('should return the discussion detail with upVotesBy that contain alex-4ger inside it when given by UP_VOTE_DISCUSS_DETAIL action', () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    }
    const action = {
      type: 'UP_VOTE_DISCUSS_DETAIL',
      payload: {
        userId: 'alex-4ger',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.upVotesBy).toContain(action.payload.userId)
    expect(nextState.downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the discussion detail with downVotesBy that contain alex-4ger inside it when given by DOWN_VOTE_DISCUSS_DETAIL action', () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    }
    const action = {
      type: 'DOWN_VOTE_DISCUSS_DETAIL',
      payload: {
        userId: 'alex-4ger',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.downVotesBy).toContain(action.payload.userId)
    expect(nextState.upVotesBy).not.toContain(action.payload.userId)
  })

  it("should return the discussion detail with upVotesBy and downVotesBy that doesn't contain alex-4ger inside it when given by NEUTRAL_VOTE_DISCUSS_DETAIL action", () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: ['alex-4ger'],
      downVotesBy: [],
      comments: [],
    }
    const action = {
      type: 'NEUTRAL_VOTE_DISCUSS_DETAIL',
      payload: {
        userId: 'alex-4ger',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.upVotesBy).not.toContain(action.payload.userId)
    expect(nextState.downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the discussion detail with new comment when given by ADD_DISCUSS_COMMENT action', () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    }
    const action = {
      type: 'ADD_DISCUSS_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'This is my first comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'alex-4ger',
            name: 'Alex Forger',
            email: 'alex@forger.com',
          },
        },
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.comments).toEqual([action.payload.comment, ...initialState.comments])
  })

  it('should return the discussion detail with comments and upVotesBy that contain alex-4ger inside it when given by UP_VOTE_DISCUSS_COMMENT action', () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is my first comment',
          createdAt: '2023-09-14T07:00:00.000Z',
          owner: {
            id: 'alex-4',
            name: 'Alex Forger',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    }
    const action = {
      type: 'UP_VOTE_DISCUSS_COMMENT',
      payload: {
        userId: 'alex-4ger',
        commentId: 'comment-1',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.comments[0].upVotesBy).toContain(action.payload.userId)
    expect(nextState.comments[0].downVotesBy).not.toContain(action.payload.userId)
  })

  it('should return the discussion detail with comments and downVotesBy that contain alex-4ger inside it when given by DOWN_VOTE_DISCUSS_COMMENT action', () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is my first comment',
          createdAt: '2023-09-14T07:00:00.000Z',
          owner: {
            id: 'alex-4',
            name: 'Alex Forger',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    }
    const action = {
      type: 'DOWN_VOTE_DISCUSS_COMMENT',
      payload: {
        userId: 'alex-4ger',
        commentId: 'comment-1',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.comments[0].downVotesBy).toContain(action.payload.userId)
    expect(nextState.comments[0].upVotesBy).not.toContain(action.payload.userId)
  })

  it("should return the discussion detail with comments, upVotesBy and downVotesBy that doesn't contain alex-4ger inside it when given by NEUTRAL_VOTE_DISCUSS_COMMENT action", () => {
    const initialState = {
      id: 'discuss-1',
      title: 'First Discussion',
      body: 'This is first discussion',
      category: 'General',
      createdAt: '2023-09-14T07:00:00.000Z',
      owner: {
        id: 'leonanta',
        name: 'Leonanta',
        avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'This is my first comment',
          createdAt: '2023-09-14T07:00:00.000Z',
          owner: {
            id: 'alex-4',
            name: 'Alex Forger',
            avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    }
    const action = {
      type: 'NEUTRAL_VOTE_DISCUSS_COMMENT',
      payload: {
        userId: 'alex-4ger',
        commentId: 'comment-1',
      },
    }

    const nextState = discussDetailReducer(initialState, action)

    expect(nextState.comments[0].upVotesBy).not.toContain(action.payload.userId)
    expect(nextState.comments[0].downVotesBy).not.toContain(action.payload.userId)
  })
})
