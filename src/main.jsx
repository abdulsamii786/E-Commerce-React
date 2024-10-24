import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { FeatureProvider } from './context/FeatureContext.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductsProvider>
      <FeatureProvider>

    <App />
      </FeatureProvider>
    </ProductsProvider>
  </BrowserRouter>,
)
