
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialSessionState: Record<string, boolean> = {
  pageLoader: false,

};

const loadingReducer = createSlice({
  name: 'appLoaders',
  initialState: initialSessionState,
  reducers: {
    updatePageLoader(state, action: PayloadAction<boolean>) {
      state.pageLoader = action.payload;
    },


  },
});

export const { updatePageLoader } = loadingReducer.actions;

export default loadingReducer.reducer;

