import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteFollowUser, getUsers, postFollowUser } from "./api";
import { toggleFollow, toggleIsLoadingFollow } from "./slice";

export const setUsers = createAsyncThunk(
  'users/get',
  async (data, { rejectWithValue }) => {
    try {
      let usersList = await getUsers(data);
      return {...usersList, currentPage: data.currentPage};
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
)

export const toggleFollowUser = createAsyncThunk(
  'users/follow',
  async(data, { rejectWithValue, dispatch }) => {
    const {id, type} = data;
    dispatch(toggleIsLoadingFollow(id));
    try {
      let result;
      if(type === 'unfollow'){
        result = await deleteFollowUser(id);
      } 
      if(type === 'follow'){
        result = await postFollowUser(id);
      }
      if (result.resultCode !== 0) {
        throw new Error('Follow  error')
      } else {
        dispatch(toggleFollow(id))
      }
    } catch (err) {
      return rejectWithValue([], err);
    } finally {
      dispatch(toggleIsLoadingFollow(id));
    }
  }
)

