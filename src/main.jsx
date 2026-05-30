import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Story.css'
import './Product3.css'
import './Promotion.css'
import './Footer.css'
import './About.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
