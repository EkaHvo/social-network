import { configureStore } from "@reduxjs/toolkit";
import { dialogsReducer } from "./dialog/slice";
import { profileReducer } from "./profile/slice";
import { usersReduser } from "./users/slice";
import { authReducer } from "./auth/slice";
import { appReducer } from "./app/slice";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
  reducer:{
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReduser,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
