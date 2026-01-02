import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../store/slices/filtersSlice'
import { useDebounce } from '../hooks/useDebounce'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [localSearch, setLocalSearch] = useState('')
  const debouncedSearch = useDebounce(localSearch, 500)

  useEffect(() => {
    dispatch(setSearch(debouncedSearch))
  }, [debouncedSearch, dispatch])

  const handleClear = () => {
    setLocalSearch('')
    dispatch(setSearch(''))
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          aria-label="Search products"
        />
        {localSearch && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>
      {localSearch && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-2">
          <p className="text-sm text-gray-600 px-2 py-1">
            Searching for: <span className="font-semibold">{localSearch}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchBar