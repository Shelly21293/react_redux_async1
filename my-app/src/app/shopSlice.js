import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData,addData,delData } from './shopAPI';

const initialState = {
  cart:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getDataAsync = createAsyncThunk('shop/fetchData',async (amount) => {
    const response = await fetchData(amount);
    return response.data;
  }
);

export const addDataAsync = createAsyncThunk('shop/addData',async (newProd) => {
    const response = await addData(newProd);
    return response;
  }
);

export const delDataAsync = createAsyncThunk('shop/delData',async (id) => {
    const response = await delData(id);
    return response;
  }
);


// shop method
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      // .addCase(getDataAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        state.cart =action.payload;
      },)
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        state.cart =[...state.cart,action.payload];
      },)
      .addCase(delDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        state.cart = state.cart.filter((x) => x.id !== action.payload);
      },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectCart = (state) => state.shop.cart;

export default shopSlice.reducer;
