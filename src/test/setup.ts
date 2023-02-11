import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import i18n, { DEFAULT_LANGUAGE } from './i18n'

afterEach(() => {
  cleanup()
  i18n.changeLanguage(DEFAULT_LANGUAGE)
})