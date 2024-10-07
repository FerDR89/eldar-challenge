import { useQuery } from "@tanstack/react-query";
import { getAllPostsService } from "../api/services";

const useGetAllPost = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsService,
    retry: 1,
  });

  return { isPending, isError, error, data };
};

export default useGetAllPost;
