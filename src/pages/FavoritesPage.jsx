import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import { clearFavorites, selectFavorites } from '../store/slices/favoritesSlice'

const FavoritesPage = () => {
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorites)

  const handleClearFavorites = () => {
    if (window.confirm('Are you sure you want to clear all favorites?')) {
      dispatch(clearFavorites())
    }
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 rounded-full mb-6">
              <Heart className="text-accent-500" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">No Favorites Yet</h1>
            <p className="text-gray-600 mb-8">
              You haven't added any products to your favorites. Start shopping and add items you love!
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              <ShoppingBag className="mr-2" size={20} />
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
            <p className="text-gray-600">
              {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="ml-2" size={16} />
            </Link>
            <button
              onClick={handleClearFavorites}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={favorites}
          isLoading={false}
          isError={false}
        />

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-3">Ready to Checkout?</h2>
            <p className="opacity-90 mb-6">
              Your favorite items are waiting! Complete your purchase and enjoy fast shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Continue Shopping
              </Link>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage