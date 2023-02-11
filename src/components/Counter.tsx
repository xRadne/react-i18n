import { useState } from 'react'
import { useTranslation } from 'react-i18next'


export function Counter() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return <button onClick={() => setCount((count) => count + 1)}>
    {t('Count.text', { count })}
  </button>
}
