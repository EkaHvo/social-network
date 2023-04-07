import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "./action";

const appSlice = createSlice({
  name: 'app',
  initialState:{
    isInitialized: false,
  },
  reducers: {
    setInitialized(state){
      state.isInitialized = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(initializeApp.fulfilled,
        (state) => { state.isInitialized = true })
      .addCase(initializeApp.pending,
        (state) => { state.isInitialized = false })
      .addCase(initializeApp.rejected,
        (state) => { state.isInitialized = false });
  }
});

export const { setInitialized } = appSlice.actions;

export const appReducer = appSlice.reducer;