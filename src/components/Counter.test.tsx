import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'
import i18n from '../test/i18n'

import { Counter } from "./Counter"

describe('Counter component', () => {
  it('should render', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Counter />
      </I18nextProvider>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should support multiple languages', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Counter />
      </I18nextProvider>
    )

    await act(() => i18n.changeLanguage('en'))
    expect(screen.getByText(/clicked/i)).toBeInTheDocument()
    await act(() => i18n.changeLanguage('sv'))
    expect(screen.getByText(/klick/i)).toBeInTheDocument()
  })

  it('should increment counter on click', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Counter />
      </I18nextProvider>
    )

    const button = screen.getByRole('button')
    const initialText = button.textContent
    await act(() => userEvent.click(button))
    const updatedText = button.textContent
    expect(updatedText).not.toBe(initialText)
  })
})
