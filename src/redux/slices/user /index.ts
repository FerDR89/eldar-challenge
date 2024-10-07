import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/user ";
import { RootState } from "../../store";

const initialState: IUser = {
  userId: 0,
  userName: "",
  role: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { createUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
