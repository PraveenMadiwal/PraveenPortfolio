

/**
 * node module
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * css link
 */
import './index.css'
import 'lenis/dist/lenis.css'

/**
 * components
 */
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
