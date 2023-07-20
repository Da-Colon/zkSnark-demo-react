
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialSessionState: any = {
  address: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialSessionState,
  reducers: {
    
  },
});

export const { } = accountSlice.actions;

export default accountSlice.reducer;

