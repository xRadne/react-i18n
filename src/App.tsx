import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter';

const languages = [
  { code: 'en', nativeName: 'English', flagEmoji: '🇬🇧' },
  { code: 'fr', nativeName: 'Francais', flagEmoji: '🇫🇷' },
  { code: 'sv', nativeName: 'Svenska', flagEmoji: '🇸🇪' },
];

const languageOptions = languages.map(l => {
  return <option key={l.code} value={l.code}>
    {l.flagEmoji} {l.nativeName}
  </option>
})

export default function App() {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    document.title = t('React internationalization');
    const flag = languages.find(e => e.code === currentLang)?.flagEmoji!;
    setTextFavicon(flag)
  }, [t]);

  return (
    <main className="App">
      <Suspense fallback="Loading...">
        <div>
          <h1>{t('Hello world')}!</h1>
          <a href="https://vitejs.dev" target="_blank">
            <img src="vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <p>{t('Welcome.text')}</p>
        </div>
        <div className="card">
          <label>
            <span>{t('Choose a language')}: </span>
            <select
              name="language"
              id="language-select"
              onChange={e => i18n.changeLanguage(e.target.value)}
              value={currentLang}
            >
              {languageOptions}
            </select>
          </label>
        </div>
        <Counter />
      </Suspense>
    </main>
  )
}

function svgFavicon(icon: string) {
  return `
  <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
    <text y=%22.9em%22 font-size=%2290%22>
      ${icon}
    </text>
  </svg>
  `.trim();
}

function setTextFavicon(text: string) {
  const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );
  const icon = svgFavicon(text);
  linkForFavicon?.setAttribute(`href`, `data:image/svg+xml,${icon}`);
}
