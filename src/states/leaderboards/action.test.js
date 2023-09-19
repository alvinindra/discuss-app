/**
 * skenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import api from '../../utils/api'
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify'

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'leonantan',
      name: 'Leonanta',
      email: 'leonanta@dicoding.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 90,
  },
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards
  })

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards

    delete api._getLeaderboards
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)
    const dispatch = vi.fn()

    await asyncReceiveLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    )
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)
    const dispatch = vi.fn()
    toast.error = vi.fn()

    await asyncReceiveLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(toast.error).toHaveBeenCalled()
  })
})
