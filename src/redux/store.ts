import { configureStore } from '@reduxjs/toolkit';
import posts from './postsFeatures/postsRedux';

const store = configureStore({
  reducer: {
    posts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
