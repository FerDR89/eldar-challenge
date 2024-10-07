import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IPost, TUpdatePost } from "../../../interfaces/post";

const initialState: IPost[] = [];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    saveAllPost: (_state, action: PayloadAction<IPost[]>) => {
      return action.payload;
    },
    createPost: (state, action: PayloadAction<IPost>) => {
      return [...state, action.payload];
    },
    updatePost: (state, action: PayloadAction<TUpdatePost>) => {
      return state.map((p: IPost) => {
        if (p.id !== action.payload.id) {
          return p;
        }
        return {
          ...p,
          ...action.payload,
        };
      });
    },
  },
});

export const { saveAllPost, createPost, updatePost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post;
export const postReducer = postSlice.reducer;
