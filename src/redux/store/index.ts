import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth";
import { userReducer } from "../slices/user ";
import { postReducer } from "../slices/post";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
