import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import customerReducer from './customerSlice'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    customer: customerReducer,
    
  },
});
