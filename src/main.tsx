import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Provider from './providers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <div className="myfont ">
        <App  />
      </div>
    </Provider>
  </StrictMode>,
)