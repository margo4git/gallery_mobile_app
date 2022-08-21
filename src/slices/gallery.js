import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { unsplashApi } from '../api/unsplash';

export const getGalleryList = createAsyncThunk(
  'gallery/getGalleryList',
  async () => {
    const response = await unsplashApi.fetchRandomPhotos({ count: 10 });
    return response.data;
  },
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    list: [],
    isLoading: true,
    error: '',
  },
  reducers: {
    setList(state, { payload }) {
      state.list = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getGalleryList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getGalleryList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = [...state.list, ...action.payload];
    });
  },
});

export const { setList } = gallerySlice.actions;
export default gallerySlice.reducer;
