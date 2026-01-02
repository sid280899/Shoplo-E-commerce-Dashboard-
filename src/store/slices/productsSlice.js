import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(`${API_URL}/products`)
    return response.data
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await axios.get(`${API_URL}/products/${productId}`)
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    currentProduct: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Fetch single product
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { clearCurrentProduct } = productsSlice.actions
export default productsSlice.reducer

export const selectAllProducts = (state) => state.products.items
export const selectProductById = (state, productId) =>
  state.products.items.find(product => product.id === productId)
export const selectCurrentProduct = (state) => state.products.currentProduct
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error