import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: {}, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    )
  }

  Wrapper.propTypes = {
    children: PropTypes.element,
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
