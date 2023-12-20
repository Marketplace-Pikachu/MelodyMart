import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  balance: 0,
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
    purchase: (state, action) => {
      state.balance -= action.payload.price;
      state.purchasedItems.push(action.payload);
    },
  },
});

export const { login, logout, deposit, purchase } = userSlice.actions;

export default userSlice.reducer;