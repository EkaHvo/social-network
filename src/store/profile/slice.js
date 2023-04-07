import { createSlice } from "@reduxjs/toolkit";
import { setProfile, setStatus, updateStatus } from "./action";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      userId: null,
      photos: {
        small: null,
        large: null,
      },
      fullName: ''
    },
    status: null,
    posts: [],
  },
  reducers: {
    addPost(state, { payload }){
      let newPost = {
        id:  Math.floor(Math.random() * 101) + state.posts.length + 1, 
        message: payload.newPostText,
        likesCount: 0,
      }
      state.posts.unshift(newPost);
    },
    deletePost(state, { payload }){
      const id = payload.id;
      state.posts = state.posts.filter(p => p.id !== id);
    },
    setPosts(state, { payload }){
      state.posts = payload.reverse();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProfile.fulfilled,
        (state, { payload }) => {
          state.profile = payload;
      })
      .addCase(setStatus.fulfilled,
        (state, { payload }) => {
          state.status = payload;
      })
      .addCase(updateStatus.fulfilled,
        (state, { payload }) => {
          state.status = payload;
      });
  }
});

export const {
  addPost,
  setPosts,
  deletePost
} = profileSlice.actions

export const profileReducer = profileSlice.reducer;