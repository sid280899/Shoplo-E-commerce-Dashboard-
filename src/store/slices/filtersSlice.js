import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    category: 'all',
    sort: 'default',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    resetFilters: (state) => {
      state.search = ''
      state.category = 'all'
      state.sort = 'default'
    },
  },
})

export const { setSearch, setCategory, setSort, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer

export const selectSearch = (state) => state.filters.search
export const selectCategory = (state) => state.filters.category
export const selectSort = (state) => state.filters.sort