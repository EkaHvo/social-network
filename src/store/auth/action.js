import { createAsyncThunk } from "@reduxjs/toolkit";
import { stopSubmit } from "redux-form";
import { deleteAuth, getAuth, postAuth } from "./api";
import { deleteUser, setUser } from "./slice";

export const login = createAsyncThunk(
  'login',
  async (loginData, { rejectWithValue, dispatch }) => {
    try {
      const data = await postAuth(loginData);
      const {resultCode, messages} = data;
      if(resultCode !== 0){
        let error = messages[0]
        dispatch(stopSubmit('login', {_error: error}))
      } else {
        dispatch(setIsAuth());
      }
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const logout = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { resultCode } = await deleteAuth();
      if(resultCode !== 0){
        throw new Error('Auth error');
      } else {
        dispatch(deleteUser());
        dispatch(setIsAuth());
      }
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const setIsAuth = createAsyncThunk(
  'auth',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      let {data, resultCode} = await getAuth();
      if(resultCode !== 0){
        throw new Error('Auth error');
      } else {
        dispatch(setUser(data))
      }
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)
