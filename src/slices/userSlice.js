import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  balance: 0,
  cartItems: [],
  purchasedItems: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.balance = action.payload.balance;
    },
    logout: (state) => {
      state.name = '';
      state.balance = 0;
    },
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    purchase: (state, action) => {
      state.balance -= action.payload.price;
      state.purchasedItems.push(action.payload);
    },
  },
});

export const { login, logout, deposit, purchase, addToCart, removeFromCart } =
  userSlice.actions;

export default userSlice.reducer;
