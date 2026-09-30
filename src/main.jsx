import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './multipage.css'
import './responsive.css'
import './cleanup.css'
import './mobile-polish.css'
import './mobile-nav-compact.css'
import './mobile-final.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
