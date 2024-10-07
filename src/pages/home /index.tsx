import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { logout } from "../../redux/slices/auth";
import useGetAllPost from "../../hooks/useGetAllPost";
import { saveAllPost, selectPost, updatePost } from "../../redux/slices/post";
import { useAppSelector } from "../../hooks/useAppSelector";
import useCreatePost from "../../hooks/useCreatePost";
import { selectUser } from "../../redux/slices/user ";
import { allowedEditFormRoles } from "../../constants ";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const posts = useAppSelector(selectPost);
  const { role: userRole } = useAppSelector(selectUser);
  const { createPostAsync, isErrorCreatePost, isPendingCreatePost } =
    useCreatePost();

  const {
    error: errorGetAllPost,
    isError: isErrorGetAllPost,
    isPending: isPendingGetAllPost,
    data: allPosts,
  } = useGetAllPost();

  useEffect(() => {
    dispatch(saveAllPost(allPosts));
  }, [dispatch, allPosts]);

  return (
    <div>
      <p>Home</p>

      <ul>
        {posts?.map((p) => (
          <li key={p.title} style={{ marginTop: "10px", marginBottom: "10px" }}>
            {JSON.stringify(p)}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>

      {allowedEditFormRoles.some((r) => userRole.includes(r)) && (
        <>
          <button
            onClick={() => {
              createPostAsync({
                body: "test",
                title: "un titulo cualquiera",
              });
            }}
          >
            Create
          </button>
          <button
            onClick={() => {
              dispatch(
                updatePost({
                  body: "TEST UPDATE",
                  id: 101,
                })
              );
            }}
          >
            update
          </button>
        </>
      )}

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/", { replace: true });
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default Home;
