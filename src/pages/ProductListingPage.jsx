import React from 'react'
import { useSelector } from 'react-redux'
import ProductGrid from '../components/ProductGrid'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import { selectFilteredProducts } from '../store/selectors/productSelectors'
import { useProducts } from '../hooks/useProducts'

const ProductListingPage = () => {
  const { products, isLoading, isError, error } = useProducts()
  const filteredProducts = useSelector(selectFilteredProducts)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl text-primary-600 md:text-5xl font-bold mb-4">Surface Studio</h1>
          <p className="text-lg text-primary-600 md:text-xl opacity-90 mb-6 max-w-2xl">
            Discover amazing products at great prices. Quality meets affordability in our curated collection.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          <SearchBar />
        </div>

        <Filters />

        <ProductGrid
          products={filteredProducts}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  )
}

export default ProductListingPage