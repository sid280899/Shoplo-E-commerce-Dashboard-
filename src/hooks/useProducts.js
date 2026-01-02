import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProductsStatus, selectProductsError } from '../store/slices/productsSlice'
import { selectFilteredProducts } from '../store/selectors/productSelectors'

export function useProducts() {
  const dispatch = useDispatch()
  const products = useSelector(selectFilteredProducts)
  const status = useSelector(selectProductsStatus)
  const error = useSelector(selectProductsError)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  return {
    products,
    isLoading: status === 'loading',
    isError: status === 'failed',
    error,
    isEmpty: status === 'succeeded' && products.length === 0
  }
}