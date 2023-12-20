import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import itemsReducer from './slices/itemsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
  },
});

export default store;
