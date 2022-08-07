import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import customerReducer from './customerSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    customer: customerReducer,
    cart: cartReducer,
    
  },
});
