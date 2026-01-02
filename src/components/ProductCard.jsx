import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Heart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite, selectIsFavorite } from '../store/slices/favoritesSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state) => selectIsFavorite(state, product.id))

  const handleFavoriteToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toggleFavorite(product))
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-300"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-accent-500 text-accent-500' : 'text-gray-400'}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating?.rate || 0)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating?.rate || '0.0'} ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded">
            Free Shipping
          </span>
        </div>

        {/* Quick Actions */}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={(e) => {
              e.preventDefault()
              // Add to cart functionality would go here
            }}
            className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
          >
            Add to Cart
          </button>
          <button
            onClick={handleFavoriteToggle}
            className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
              isFavorite
                ? 'border-accent-500 text-accent-600 bg-accent-50'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            {isFavorite ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard