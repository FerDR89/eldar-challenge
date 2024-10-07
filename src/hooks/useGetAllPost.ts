import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "../api/services";

const useGetAllPost = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
    retry: 1,
  });

  return { isPending, isError, error, data: data?.data };
};

export default useGetAllPost;
