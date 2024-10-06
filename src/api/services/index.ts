import { AxiosError } from "axios";
import axios from "../configs/axios";
import { IPost } from "../../interfaces/post";

export const fetchAllPosts = async () => {
  try {
    const result = await axios.get("/post?_limit=10");
    return result;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};

export const createPost = async (post: IPost) => {
  try {
    const result = await axios.get("/post?_limit=10");
    return result;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};

export const updatePost = async () => {
  try {
    const result = await axios.get("/post?_limit=10");
    return result;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};
