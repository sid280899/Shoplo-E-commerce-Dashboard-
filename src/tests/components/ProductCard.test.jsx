import React from 'react'
import { describe, it, expect} from 'vitest'
import { render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import favoritesReducer from '../../store/slices/favoritesSlice'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'Test description',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 4.5, count: 120 }
}

describe('ProductCard', () => {
  const renderWithStore = (store) => {
    return render(
      <BrowserRouter>
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
      </BrowserRouter>
    )
  }

  it('renders product information correctly', () => {
    const store = configureStore({
      reducer: {
        favorites: favoritesReducer
      }
    })

    renderWithStore(store)
    

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument()
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument()
  })

  it('displays favorite button', () => {
    const store = configureStore({
      reducer: {
        favorites: favoritesReducer
      }
    })

    renderWithStore(store)
    

    //expect(screen.getByLabelText('Add to favorites')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument()
  })

  it('navigates to product detail page when clicked', () => {
    const store = configureStore({
      reducer: {
        favorites: favoritesReducer
      }
    })

    renderWithStore(store)
    
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `/product/${mockProduct.id}`)
  })
})