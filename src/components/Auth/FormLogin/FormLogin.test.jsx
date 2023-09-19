/**
 * scenario testing
 *
 * - FormLogin component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 */

import '@testing-library/jest-dom'
import { act, screen } from '@testing-library/react'
import FormLogin from './FormLogin'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/utils/test-utils'

describe('LoginForm component', () => {
  it('should handle email typing correctly', async () => {
    await act(async () => renderWithProviders(<FormLogin />))
    const emailInput = await screen.getByPlaceholderText('Your Email')

    await act(async () => userEvent.type(emailInput, 'testingleo@gmail.com'))

    expect(emailInput).toHaveValue('testingleo@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    await act(async () => renderWithProviders(<FormLogin />))
    const passwordInput = await screen.getByPlaceholderText('••••••••')

    await act(async () => userEvent.type(passwordInput, 'testing1234'))

    expect(passwordInput).toHaveValue('testing1234')
  })
})
