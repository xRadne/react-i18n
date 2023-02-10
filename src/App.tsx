import { useState } from 'react'
import { Suspense } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg'
import './App.css'

const languages = [
  { code: 'en', nativeName: 'English' },
  { code: 'fr', nativeName: 'Francais' },
  { code: 'sv', nativeName: 'Svenska' },
];

export default function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <Suspense fallback="Loading...">

      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t('HelloWorld.text')}!</h1>
        <div className="card">
          <p>{t('Welcome.text')}</p>

          <label>
            <span>{t('ChooseLanguage.text')}: </span>
            <select name="language" id="language-select"
              onChange={e => i18n.changeLanguage(e.target.value)}
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.nativeName}</option>)}
            </select>
          </label>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          {t('Count.text', { count })}
        </button>
      </div>
    </Suspense>
  )
}
