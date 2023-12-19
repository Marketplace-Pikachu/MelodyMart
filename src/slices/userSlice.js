import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  balance: 0,
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
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { login, logout, deposit, withdraw } = userSlice.actions;

export default userSlice.reducer;