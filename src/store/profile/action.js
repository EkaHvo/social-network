import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, getStatus, putStatus } from "./api";

export const setProfile = createAsyncThunk(
  'profile/get',
  async (data, { rejectWithValue }) => {
    try {
      let profile = await getProfile(data);
      return profile;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const setStatus = createAsyncThunk(
  'profile/getstatus',
  async (data, { rejectWithValue }) => {
    try {
      let status = await getStatus(data);
      return status;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const updateStatus = createAsyncThunk(
  'profile/putstatus',
  async (status, { rejectWithValue }) => {
    try {
      let { resultCode } = await putStatus(status);
      if(resultCode !== 0){
        throw new Error('Auth error');
      }
      return status;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)
