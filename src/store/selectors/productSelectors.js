import { createSelector } from '@reduxjs/toolkit'
import { selectAllProducts } from '../slices/productsSlice'
import { selectSearch, selectCategory, selectSort } from '../slices/filtersSlice'

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSearch, selectCategory, selectSort],
  (products, search, category, sort) => {
    let filtered = [...products]

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      )
    }

    // Apply category filter
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category)
    }

    // Apply sorting
    switch (sort) {
      case 'price_low_high':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price_high_low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'title_asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'title_desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        // Default sorting (by ID or as returned from API)
        break
    }

    return filtered
  }
)

export const selectUniqueCategories = createSelector(
  [selectAllProducts],
  (products) => {
    const categories = products.map(product => product.category)
    return ['all', ...new Set(categories)]
  }
)