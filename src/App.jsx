import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <h2>{t("welcomeYouCan")}</h2>
      </header>
    </div>
  )
}

export default App
