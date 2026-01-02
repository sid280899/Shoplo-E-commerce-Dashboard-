import React from 'react'
import { Filter, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSort, resetFilters, selectCategory, selectSort } from '../store/slices/filtersSlice'
import { selectUniqueCategories } from '../store/selectors/productSelectors'

const Filters = () => {
  const dispatch = useDispatch()
  const categories = useSelector(selectUniqueCategories)
  const selectedCategory = useSelector(selectCategory)
  const selectedSort = useSelector(selectSort)

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price_low_high', label: 'Price: Low to High' },
    { value: 'price_high_low', label: 'Price: High to Low' },
    { value: 'title_asc', label: 'Title: A to Z' },
    { value: 'title_desc', label: 'Title: Z to A' },
  ]

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category))
  }

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value))
  }

  const handleReset = () => {
    dispatch(resetFilters())
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedSort !== 'default'

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
          >
            <X size={16} />
            <span>Clear all</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Category</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
          <select
            value={selectedSort}
            onChange={handleSortChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Category: {selectedCategory}
                <button
                  onClick={() => dispatch(setCategory('all'))}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {selectedSort !== 'default' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Sort: {sortOptions.find(opt => opt.value === selectedSort)?.label}
                <button
                  onClick={() => dispatch(setSort('default'))}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters