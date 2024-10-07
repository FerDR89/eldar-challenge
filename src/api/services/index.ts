import { AxiosError } from "axios";
import axios from "../configs/axios";
import { TCreatePostService } from "../../interfaces/post";

export const getAllPostsService = async () => {
  try {
    const result = await axios.get("/posts?_limit=10");
    return result.data;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};

export const createPostService = async (post: TCreatePostService) => {
  const body = JSON.stringify(post);
  try {
    const result = await axios.post("/posts", body);
    return result.data;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};
