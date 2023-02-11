import { cleanup, screen, render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { afterEach, describe, it, expect } from 'vitest'

import i18n from '../test/i18n'
import { Counter } from "./Counter"
import { act } from 'react-dom/test-utils'

afterEach(() => {
  cleanup()
})

describe('Counter component', () => {
  it('should render', () => {
    const component = render((
      <I18nextProvider i18n={i18n}>
        <Counter />
      </I18nextProvider>
    ))
    expect(component.container.querySelector('button')).toBeInTheDocument()
  })

  it('should support multiple languages', async () => {
    const component = render((
      <I18nextProvider i18n={i18n}>
        <Counter />
      </I18nextProvider>
    ))

    await act(() => i18n.changeLanguage('en'))
    expect(screen.getByText(/clicked/i)).toBeInTheDocument()
    await act(() => i18n.changeLanguage('sv'))
    expect(screen.getByText(/klick/i)).toBeInTheDocument()
  })
})
