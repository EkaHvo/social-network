import { createSlice } from "@reduxjs/toolkit";
import { setIsAuth } from "./action";

const authSlice = createSlice({
  name: 'auth',
  initialState:{
    user: {
      id: null,
      login: null,
      email: null,
    },
    isAuth: false,
    isAuthLoading: false,
  },
  reducers: {
    setUser(state, { payload }){
      state.user = payload;
      state.isAuth = true;
    },
    deleteUser(state){
      state.user = {
        id: null,
        login: null,
        email: null,
      };
      state.isAuth = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setIsAuth.fulfilled,
        (state) => { state.isAuthLoading = false })
      .addCase(setIsAuth.pending,
        (state) => { state.isAuthLoading = true })
      .addCase(setIsAuth.rejected,
        (state) => { state.isAuthLoading = false });
  }
});

export const {setUser, deleteUser} = authSlice.actions;

export const authReducer = authSlice.reducer;