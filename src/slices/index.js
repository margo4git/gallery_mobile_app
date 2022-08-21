import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './gallery';
export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});
