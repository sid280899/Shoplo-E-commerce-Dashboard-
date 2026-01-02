import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload
      if (!state.items.find(item => item.id === product.id)) {
        state.items.push(product)
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.id !== productId)
    },
    toggleFavorite: (state, action) => {
      const product = action.payload
      const existingIndex = state.items.findIndex(item => item.id === product.id)
      
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1)
      } else {
        state.items.push(product)
      }
    },
    clearFavorites: (state) => {
      state.items = []
    },
  },
})

export const { 
  addToFavorites, 
  removeFromFavorites, 
  toggleFavorite,
  clearFavorites 
} = favoritesSlice.actions
export default favoritesSlice.reducer

export const selectFavorites = (state) => state.favorites.items
export const selectIsFavorite = (state, productId) =>
  state.favorites.items.some(item => item.id === productId)