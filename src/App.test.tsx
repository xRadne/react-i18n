import { screen, render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, it, expect } from 'vitest'

import i18n from './test/i18n'
import { act } from 'react-dom/test-utils'
import App from './App'

describe('App component', () => {
  it('should render', () => {
    const component = render((
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    ))
    expect(component.container.querySelector('#hello')).toBeInTheDocument()
  })

  it('should support multiple languages', async () => {
    const component = render((
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    ))

    await act(() => i18n.changeLanguage('en'))
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
    await act(() => i18n.changeLanguage('sv'))
    expect(screen.getByText(/Hej världen/i)).toBeInTheDocument()
  })
})
