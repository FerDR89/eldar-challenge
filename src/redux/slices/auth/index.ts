import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IUser } from "../../../interfaces/user ";

type TAuth = Pick<IUser, "userId"> & {
  isAuthenticated: boolean;
};

const initialState: TAuth = {
  userId: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Pick<IUser, "userId">>) => {
      const { userId } = action.payload;
      return {
        userId,
        isAuthenticated: !state.isAuthenticated,
      };
    },

    logout: (state) => {
      return {
        userId: "",
        isAuthenticated: !state.isAuthenticated,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
