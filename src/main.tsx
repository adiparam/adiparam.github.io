import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom';

// Initialize Google Analytics
ReactGA.initialize('G-BE7VV74ZV2');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
