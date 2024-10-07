import { AxiosError } from "axios";
import axios from "../configs/axios";
import { IPost } from "../../interfaces/post";

export const fetchAllPosts = async () => {
  try {
    const result = await axios.get("/posts?_limit=10");
    return result;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};
