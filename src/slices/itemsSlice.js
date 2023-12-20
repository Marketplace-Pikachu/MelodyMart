import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  itemsList: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.totalItems = action.payload.length;
      state.itemsList = action.payload;
    },
    addItem: (state, action) => {
      state.totalItems += 1;
      state.itemsList.unshift(action.payload);
    },
    removeItem: (state, action) => {
      state.totalItems -= 1;
      state.itemsList = state.itemsList.filter((item) => item.product_id !== action.payload);
    },
    updateItem: (state, action) => {
      state.itemsList = state.itemsList.map((item) => {
        if (item.product_id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem, updateItem, setItems } = itemsSlice.actions;

export default itemsSlice.reducer;