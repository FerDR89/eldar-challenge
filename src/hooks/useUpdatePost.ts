import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { updatePostService } from "../api/services";
import { updatePost } from "../redux/slices/post";
import { TUpdatePost } from "../interfaces/post";

const useUpdatePost = () => {
  const dispatch = useDispatch();
  const { mutateAsync, isError, error, isPending } = useMutation({
    mutationFn: (updatedPost: TUpdatePost) => updatePostService(updatedPost),

    onSuccess: (_result, variables) => {
      dispatch(updatePost({ ...variables }));
    },
  });

  if (isError) {
    console.error(error);
  }

  return {
    updatePostAsync: mutateAsync,
    isErrorUpdatePost: isError,
    isPendingUpdatePost: isPending,
  };
};

export default useUpdatePost;
