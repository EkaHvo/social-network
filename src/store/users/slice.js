import { createSlice } from "@reduxjs/toolkit";
import { setUsers } from "./action";

const initialState = {
  users:[],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isLoadingUsers: false,
  isLoadingFollow: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleFollow(state, { payload }){
      const id = payload;
      state.users = state.users.map(user => {
        if(user.id === id) {
          return {...user, followed: !user.followed};
        }
        return user;
      })
    },
    toggleIsLoadingFollow(state, { payload }){
      if(state.isLoadingFollow.includes(payload)){
        state.isLoadingFollow = state.isLoadingFollow.filter(item => item !== payload);
      } else {
        state.isLoadingFollow = [...state.isLoadingFollow, payload];
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setUsers.fulfilled, 
        (state, { payload }) =>{
        state.currentPage = payload.currentPage;
        state.users = payload.items;
        state.totalCount = payload.totalCount;
        state.isLoadingUsers = false;
      })
      .addCase(setUsers.pending,
        (state, { payload }) =>{
        state.users = payload;
        state.isLoadingUsers = true;
      })
      .addCase(setUsers.rejected, 
        (state ) =>{
        state.isLoadingUsers = false;
      });
  }
});

export const { 
  toggleFollow,
  toggleIsLoadingFollow 
} = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
