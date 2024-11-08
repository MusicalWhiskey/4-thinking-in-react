import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <h1>Thinking in React</h1>
    <h2>(320.4)</h2>
    </>
    <App />
  </StrictMode>,
)
