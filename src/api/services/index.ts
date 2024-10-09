import { AxiosError } from "axios";
import axios from "../configs/axios";
import { TCreatePostService, TUpdatePost } from "../../interfaces/post";

export const getAllPostsService = async () => {
  try {
    const result = await axios.get("/posts?_limit=3");
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
export const updatePostService = async (post: TUpdatePost) => {
  const { id } = post;

  let body = {};

  if (post.title && post.body) {
    body = JSON.stringify({
      body: post.body,
      title: post.title,
    });
  }

  if (post.title) {
    body = JSON.stringify({
      title: post.title,
    });
  }

  if (post.body) {
    body = JSON.stringify({
      body: post.body,
    });
  }

  try {
    const result = await axios.patch(`/posts/${id}`, body);
    return result.data;
  } catch (error) {
    const { message, status } = error as AxiosError;
    throw {
      message,
      status,
    };
  }
};
