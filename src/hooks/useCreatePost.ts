import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { createPostService } from "../api/services";
import { createPost } from "../redux/slices/post";
import { TCreatePost } from "../interfaces/post";
import useAppSelector from "./useAppSelector";
import { selectUser } from "../redux/slices/user ";

const useCreatePost = () => {
  const dispatch = useDispatch();
  const { userId } = useAppSelector(selectUser);

  const { mutateAsync, isError, error, isPending } = useMutation({
    mutationFn: (newPost: TCreatePost) =>
      createPostService({ userId, ...newPost }),

    onSuccess: (result, variables) => {
      const { id: newPostId } = result;
      dispatch(createPost({ id: newPostId, userId, ...variables }));
    },
  });

  if (isError) {
    console.error(error);
  }

  return {
    createPostAsync: mutateAsync,
    isErrorCreatePost: isError,
    isPendingCreatePost: isPending,
  };
};

export default useCreatePost;
