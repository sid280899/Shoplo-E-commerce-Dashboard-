import { configureStore } from '@reduxjs/toolkit'
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productsReducer from './slices/productsSlice'
import filtersReducer from './slices/filtersSlice'
import favoritesReducer from './slices/favoritesSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favorites']
}

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesReducer)

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)