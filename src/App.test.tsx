import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'
import i18n from './test/i18n'

import App from './App'

describe('App component', () => {
  it('should render', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  it('should support multiple languages', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )

    await act(() => i18n.changeLanguage('en'))
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument()
    await act(() => i18n.changeLanguage('sv'))
    expect(screen.getByText(/Hej världen/i)).toBeInTheDocument()
  })

  it('should change language on click', async () => {
    const component = render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )

    const app = component.baseElement
    console.log(app.textContent)
    expect(app.textContent).toMatch(/Hello world/i)

    const select = component.container.querySelector('select')!
    await act(() => userEvent.selectOptions(select, 'sv'))
    expect(app.textContent).toMatch(/Hej världen/i)
  })
})
