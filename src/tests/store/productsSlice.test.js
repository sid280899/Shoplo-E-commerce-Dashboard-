import { describe, it, expect, beforeEach } from 'vitest'
import productsReducer, { fetchProducts, clearCurrentProduct } from '../../store/slices/productsSlice'

describe('productsSlice', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      items: [],
      currentProduct: null,
      status: 'idle',
      error: null,
    }
  })

  it('should return the initial state', () => {
    expect(productsReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  it('should handle clearCurrentProduct', () => {
    const state = {
      ...initialState,
      currentProduct: { id: 1, title: 'Test Product' },
    }
    
    const nextState = productsReducer(state, clearCurrentProduct())
    expect(nextState.currentProduct).toBeNull()
  })

  it('should handle fetchProducts.pending', () => {
    const action = { type: fetchProducts.pending.type }
    const state = productsReducer(initialState, action)
    
    expect(state.status).toBe('loading')
    expect(state.error).toBeNull()
  })

  it('should handle fetchProducts.fulfilled', () => {
    const mockProducts = [{ id: 1, title: 'Test Product' }]
    const action = { type: fetchProducts.fulfilled.type, payload: mockProducts }
    const state = productsReducer(initialState, action)
    
    expect(state.status).toBe('succeeded')
    expect(state.items).toEqual(mockProducts)
    expect(state.error).toBeNull()
  })

  it('should handle fetchProducts.rejected', () => {
    const errorMessage = 'Failed to fetch'
    const action = { type: fetchProducts.rejected.type, error: { message: errorMessage } }
    const state = productsReducer(initialState, action)
    
    expect(state.status).toBe('failed')
    expect(state.error).toBe(errorMessage)
    expect(state.items).toEqual([])
  })
})