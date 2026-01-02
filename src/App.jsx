import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Header from './components/Header'
import ProductListingPage from './pages/ProductListingPage'
import ProductDetailPage from './pages/ProductDetailPage'
import FavoritesPage from './pages/FavoritesPage'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<ProductListingPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-12">
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold">Shoplo</span>
                    <p className="text-gray-400 mt-2">Quality products, exceptional prices</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-gray-400">
                      &copy; {new Date().getFullYear()} Shoplo Dashboard. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Built with React, Redux Toolkit, and Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App