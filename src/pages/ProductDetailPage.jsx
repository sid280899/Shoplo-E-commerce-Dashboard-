import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, selectCurrentProduct, selectProductsStatus } from '../store/slices/productsSlice'
import { toggleFavorite, selectIsFavorite } from '../store/slices/favoritesSlice'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const product = useSelector(selectCurrentProduct)
  const status = useSelector(selectProductsStatus)
  const isFavorite = useSelector((state) => selectIsFavorite(state, id))

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [id, dispatch])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(product))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                </div>
                <button
                  onClick={handleFavoriteToggle}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart
                    size={24}
                    className={isFavorite ? 'fill-accent-500 text-accent-500' : 'text-gray-400'}
                  />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating?.rate || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating?.rate || '0.0'} • {product.rating?.count || 0} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${product.price.toFixed(2)}
                </div>
                <p className="text-green-600 font-medium">In stock • Free shipping</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Truck className="text-primary-500" size={20} />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-gray-500">On all orders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-primary-500" size={20} />
                  <div>
                    <p className="font-medium">2-Year Warranty</p>
                    <p className="text-sm text-gray-500">Guaranteed quality</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="text-primary-500" size={20} />
                  <div>
                    <p className="font-medium">30-Day Returns</p>
                    <p className="text-sm text-gray-500">No questions asked</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary-500 text-white py-4 px-6 rounded-xl hover:bg-primary-600 transition-colors font-semibold text-lg">
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-primary-500 text-primary-500 py-4 px-6 rounded-xl hover:bg-primary-50 transition-colors font-semibold text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage