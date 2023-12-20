import { createSlice } from '@reduxjs/toolkit';
import { parse } from 'ipaddr.js';

const userData = JSON.parse(localStorage.getItem('user')) || {};
const initialState = {
  userId: userData.userId || '',
  name: userData.username || '',
  balance: Number(userData.balance).toFixed(2) || 0,
  cartItems: [],
  purchasedItems: [],
  profilePicture: userData.profilePicture || ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userId = action.payload.id;
      state.name = action.payload.username;
      state.balance = Number(action.payload.balance);
      state.profilePicture = action.payload.profilePicture;
    },
    logout: (state) => {
      state.name = '';
      state.balance = 0;
      state.profilePicture = '';
      state.cartItems = [];
      state.purchasedItems = [];
      localStorage.removeItem('user')
    },
    deposit: (state, action) => {
      state.balance += parseFloat(action.payload);
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.product_id !== action.payload);
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
