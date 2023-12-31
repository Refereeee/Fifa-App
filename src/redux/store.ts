import { configureStore } from '@reduxjs/toolkit';
import register from './slice/registerSlice';
import login from './slice/loginSLice';
import home from './slice/homeSlice';
import playoff from './slice/playoffSlice';
import auth from './slice/authSlice';
import cart from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    register,
    login,
    home,
    playoff,
    auth,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
