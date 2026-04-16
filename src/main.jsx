

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
import MyPackages from "./Pages/myPackages.jsx";
import ChatbotDetails from "./Pages/ChatbotDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/myPackages" element={<MyPackages />} />
      <Route path="/chatbot-details" element={<ChatbotDetails />} />
    </Routes>
  </BrowserRouter>
)
