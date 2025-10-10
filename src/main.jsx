import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { LoadingProvider } from './Pages/Loading'
import './index.css'



createRoot(document.getElementById('root')).render(
  <LoadingProvider>
      <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
  </LoadingProvider>
)
