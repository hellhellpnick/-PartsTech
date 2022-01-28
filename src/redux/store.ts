import { configureStore } from '@reduxjs/toolkit';
import posts from './postsFeatures/postsRedux';
import albums from './albumsFeatures/albumsRedux';

const store = configureStore({
  reducer: {
    posts,
    albums,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
