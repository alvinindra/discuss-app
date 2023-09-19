/**
 * scenario testing
 *
 * - DiscussionsComments component
 *   - should handle comment typing correctly
 */

import '@testing-library/jest-dom'
import React from 'react'
import { act, screen } from '@testing-library/react'
import DiscussionsComments from './DiscussionsComments'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/utils/test-utils'

describe('DiscussionsComments component', () => {
  it('should handle comment typing correctly', async () => {
    const initialState = {
      authUser: {
        id: 'leonanta',
        name: 'Leonanta',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    }

    await act(async () => renderWithProviders(<DiscussionsComments />), {
      preloadedState: initialState,
    })
    const commentInput = await screen.getByPlaceholderText('Leave your comment here')
    await act(async () => userEvent.type(commentInput, 'Great Testing'))

    await expect(commentInput).toHaveValue('Great Testing')
  })
})
