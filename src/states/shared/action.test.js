/**
 * skenario test
 *
 * - asyncPopulateUsersAndDiscussions thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { receiveUsersActionCreator } from '../users/action'
import { receiveDiscussionsActionCreator } from '../discussions/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { asyncPopulateUsersAndDiscussions } from './action'
import api from '@/utils/api'

const fakeDiscussionsResponse = [
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
]

const fakeUsersResponse = [
  {
    id: 'leonanta',
    name: 'Leonanta Pramudya',
    email: 'leonanta_pramudya@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=leonanta&background=random',
  },
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndDiscussions thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllDiscussions = api.getAllDiscussions
  })

  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllDiscussions = api._getAllDiscussions

    delete api._getAllUsers
    delete api._getAllDiscussions
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
    api.getAllDiscussions = () => Promise.resolve(fakeDiscussionsResponse)

    const dispatch = vi.fn()

    await asyncPopulateUsersAndDiscussions()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveDiscussionsActionCreator(fakeDiscussionsResponse))
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThreads = () => Promise.reject(fakeErrorResponse)
    const dispatch = vi.fn()
    window.alert = vi.fn()

    await asyncPopulateUsersAndDiscussions()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
