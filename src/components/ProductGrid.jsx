import React from 'react'
import ProductCard from './ProductCard'
import { Package } from 'lucide-react'

const ProductGrid = ({ products, isLoading, isError, error }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="aspect-square bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-6 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <Package className="text-red-600" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Products</h3>
        <p className="text-gray-600 mb-4">{error || 'Failed to load products'}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <Package className="text-gray-400" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Products Found</h3>
        <p className="text-gray-600">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid