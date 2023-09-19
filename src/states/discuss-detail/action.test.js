import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import api from '../../utils/api'
import {
  asyncReceiveDiscussDetail,
  clearDiscussDetailActionCreator,
  receiveDiscussDetailActionCreator,
} from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const fakeDiscussionDetail = {
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
}

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncReceiveDiscussDetail thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail
  })

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail

    delete api._getThreadDetail
  })

  it('should dispatch actions correctly when data fetching is successful', async () => {
    api.getThreadDetail = () => Promise.resolve(fakeDiscussionDetail)
    const dispatch = vi.fn()

    await asyncReceiveDiscussDetail()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(clearDiscussDetailActionCreator())
    expect(dispatch).toHaveBeenCalledWith(receiveDiscussDetailActionCreator(fakeDiscussionDetail))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch error message when data fetching fails', async () => {
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)
    const dispatch = vi.fn()
    toast.error = vi.fn()

    await asyncReceiveDiscussDetail()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(toast.error).toHaveBeenCalled()
  })
})
