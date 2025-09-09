import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEffect from './AppEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEffect />
  </StrictMode>,
)
