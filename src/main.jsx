import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesPage from "./pages/RoutesPage"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutesPage />
  </BrowserRouter>,
)
