/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import api from '../../utils/api'
import { addThreadActionCreator, asyncAddThread } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const fakeThreadResponse = {
  id: 'discuss-1',
  title: 'First Discussion',
  body: 'This is first discussion',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
}

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncAddThread thunk', function () {
  beforeEach(() => {
    api._createThread = api.createThread
  })

  afterEach(() => {
    api.createThread = api._createThread

    delete api._createThread
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.createThread = () => Promise.resolve(fakeThreadResponse)
    const dispatch = vi.fn()
    const payload = {
      title: 'testing',
      body: 'testing',
    }

    await asyncAddThread(payload)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThreadResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.createThread = () => Promise.reject(fakeErrorResponse)
    const dispatch = vi.fn()
    toast.error = vi.fn()
    const payload = {
      title: 'Testing Title',
      body: 'Body Testing',
    }

    await asyncAddThread(payload)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(toast.error).toHaveBeenCalled()
  })
})
