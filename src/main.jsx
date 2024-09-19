import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Global.css'

// import PI como numeroPi
// import { PI as numeroPi, GTM_BRASIL } from  './teste'
// import nomes from './nomes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
