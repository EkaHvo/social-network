import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUserPhotos } from "../auth/slice";
import { getProfile, getStatus, postPhoto, putProfile, putStatus } from "./api";

export const setProfile = createAsyncThunk(
  'profile/get',
  async (data, { rejectWithValue }) => {
    try {
      let profile = await getProfile(data);
      console.log(profile);
      return profile;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const updateProfile = createAsyncThunk(
  'profile/putprofile',
  async (profile, { rejectWithValue }) => {
    try {
      const data = await putProfile(profile);
      if(data.resultCode !== 0){
        throw new Error('Auth error');
      }
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

export const savePhoto = createAsyncThunk(
  'profile/savePhoto',
  async (file, { rejectWithValue, dispatch }) => {
    try {
      const { data, resultCode } = await postPhoto(file);
      if(resultCode !== 0){
        throw new Error('Auth error');
      }
      dispatch(setUserPhotos(data));
      return data;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)
