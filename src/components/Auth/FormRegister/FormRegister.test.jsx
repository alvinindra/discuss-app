/**
 * scenario testing
 *
 * - FormRegister component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 */

import '@testing-library/jest-dom'
import { act, screen } from '@testing-library/react'
import FormRegister from './FormRegister'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/utils/test-utils'

describe('LoginForm component', () => {
  it('should handle name typing correctly', async () => {
    await act(async () => renderWithProviders(<FormRegister />))
    const nameInput = await screen.getByPlaceholderText('Leonanta Pramudya')

    await act(async () => userEvent.type(nameInput, 'Leonanta'))

    expect(nameInput).toHaveValue('Leonanta')
  })

  it('should handle email typing correctly', async () => {
    await act(async () => renderWithProviders(<FormRegister />))
    const emailInput = await screen.getByPlaceholderText('name@domain.com')

    await act(async () => userEvent.type(emailInput, 'testingleo@gmail.com'))

    expect(emailInput).toHaveValue('testingleo@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    await act(async () => renderWithProviders(<FormRegister />))
    const passwordInput = await screen.getByPlaceholderText('Your Password')

    await act(async () => userEvent.type(passwordInput, 'testing1234'))

    expect(passwordInput).toHaveValue('testing1234')
  })
})
