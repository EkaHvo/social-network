import { createSlice } from "@reduxjs/toolkit";
import { mockDialogs, mockMessages } from "../../constants/vars";

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState:{
    messages: mockMessages,
    dialogs: mockDialogs,
  },
  reducers: {
    sendMessage(state, { payload }){
      let newMessage = { 
        id: state.messages.length + 1,
        message: payload.newMessage,
      }
      state.messages.push(newMessage);
    },
    setDialogs(state, { payload }){
      state.dialogs = [...state.dialogs, ...payload.dialogs];
    },
    setMessages(state, { payload }){
      state.messages = [...state.messages, ...payload.messages];
    },
  },
});

export const {
  sendMessage,
  setDialogs,
  setMessages
} = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
