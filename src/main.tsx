import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18next from 'i18next'
import I18NextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    backend: {
      loadPath: "src/assets/locales/{{lng}}/translation.json"
    }  
  })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
