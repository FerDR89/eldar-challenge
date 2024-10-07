import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IUser } from "../../../interfaces/user ";

type TAuth = Pick<IUser, "userName"> & {
  isAuthenticated: boolean;
};

const initialState: TAuth = {
  userName: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Pick<IUser, "userName">>) => {
      const { userName } = action.payload;
      return {
        userName,
        isAuthenticated: !state.isAuthenticated,
      };
    },

    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
