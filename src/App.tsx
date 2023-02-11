import { Suspense } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './components/Counter';

const languages = [
  { code: 'en', nativeName: 'English' },
  { code: 'fr', nativeName: 'Francais' },
  { code: 'sv', nativeName: 'Svenska' },
];

export default function App() {
  const { t } = useTranslation();

  const currentLang = i18n.language;

  return (
    <Suspense fallback="Loading...">

      <div className="App">
        <div>
          <h1 id='hello'>{t('HelloWorld.text')}!</h1>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <p>{t('Welcome.text')}</p>
        </div>
        <div className="card">
          <label>
            <span>{t('ChooseLanguage.text')}: </span>
            <select
              name="language"
              id="language-select"
              onChange={e => i18n.changeLanguage(e.target.value)}
              value={currentLang}
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.nativeName}</option>)}
            </select>
          </label>
        </div>
        <Counter />
      </div>
    </Suspense>
  )
}
