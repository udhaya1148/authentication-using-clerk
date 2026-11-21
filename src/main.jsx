import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { BrowserRouter, useNavigate } from 'react-router-dom'

function RootLayout() {
  const navigate = useNavigate();

  return(
     <ClerkProvider 
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      >
      <App />
    </ClerkProvider>
  )
}
createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <RootLayout />
  </BrowserRouter>
</StrictMode>
)
