import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Stores from './pages/Stores/Stores.jsx'
import Shop from './pages/Shop/Shop.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/stores',
    element: <Stores/>
  },
  {
    path: '/shop',
    element: <Shop/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>
  </StrictMode>,
)
