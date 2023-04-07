import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsAuth } from "../auth/action";
import { setInitialized } from "./slice";

export const initializeApp = createAsyncThunk(
  'app',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const promise = dispatch(setIsAuth());
      Promise.all([promise])
        .then(()=>{
          dispatch(setInitialized());
        });
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)
