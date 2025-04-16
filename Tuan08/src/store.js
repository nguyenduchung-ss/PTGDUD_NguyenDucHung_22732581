// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterClassic from './redux/counterReducer';
import counterToolkit from './toolkit/counterSlice';
import counterReducer from './features/counter/counterSlice';
import todoReducer from './features/todos/todoSlice';
import themeReducer from './features/theme/themeSlice';
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    counterClassic,
    counterToolkit,
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer
  }
});

export default store;
