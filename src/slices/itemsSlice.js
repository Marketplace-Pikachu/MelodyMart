import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  itemsList: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalItems += 1;
      state.itemsList.push(action.payload);
    },
    removeItem: (state, action) => {
      state.totalItems -= 1;
      state.itemsList = state.itemsList.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      state.itemsList = state.itemsList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});
