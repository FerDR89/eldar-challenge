import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useGetAllPost from "../../hooks/useGetAllPost";
import { saveAllPost, selectPost, updatePost } from "../../redux/slices/post";
import { useAppSelector } from "../../hooks/useAppSelector";
import useCreatePost from "../../hooks/useCreatePost";
import { selectUser } from "../../redux/slices/user ";
import { CAN_EDIT_FORM } from "../../constants ";
import {
  Button,
  Stack,
  Box,
  Typography,
  colors,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Input from "../../components/input";
import { IPost, TCreatePost, TUpdatePost } from "../../interfaces/post";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { createPostSchema, updatePostSchema } from "../../schema";
import ListPost from "../../components/list ";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState<TUpdatePost | null>(null);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const posts = useAppSelector(selectPost);
  // const { role: userRole } = useAppSelector(selectUser);
  const { createPostAsync, isErrorCreatePost, isPendingCreatePost } =
    useCreatePost();

  const {
    error: errorGetAllPost,
    isError: isErrorGetAllPost,
    isPending: isPendingGetAllPost,
    data: allPosts,
  } = useGetAllPost();

  const {
    handleSubmit: createPostHandleSubmit,
    register: createPostRegister,
    reset: createPostReset,
    formState: { errors: createPostErrors },
  } = useForm<TCreatePost>({
    mode: "onSubmit",
    resolver: yupResolver(createPostSchema),
  });

  // const {
  //   handleSubmit: updatePostHandleSubmit,
  //   register: updatePostRegister,
  //   reset: updatePostReset,
  //   formState: { errors: updatePostErrors },
  // } = useForm<Pick<TUpdatePost, "body" | "title">>({
  //   mode: "onSubmit",
  //   resolver: yupResolver(updatePostSchema),
  // });

  useEffect(() => {
    dispatch(saveAllPost(allPosts));
  }, [dispatch, allPosts]);

  const onSubmitCreatePost: SubmitHandler<TCreatePost> = (formData) => {
    console.log(formData);
    // try {
    //   createPostAsync({
    //     body: "test",
    //     title: "un titulo cualquiera",
    //   });
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   createPostReset();
    // }
  };

  // const onSubmitUpdatePost: SubmitHandler<
  //   Pick<TUpdatePost, "body" | "title">
  // > = (formData) => {
  //   console.log(formData);
  // };

  return (
    <Stack
      sx={{
        minHeight: "85vh",
        py: "20px",

        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: colors.grey[400], mb: "20px" }}
        >
          Últimos post:
        </Typography>
      </Stack>

      <ListPost posts={posts} setPostChecked={setSelectedPost} />
      {/* <Stack height="100%">
        <Box
          autoComplete="off"
          component="form"
          onSubmit={createPostHandleSubmit(onSubmitCreatePost)}
          maxWidth="360px"
        >
          <Input
            label="Ingresá el título"
            type="text"
            name="title"
            helperText={createPostErrors.title?.message}
            error={Boolean(createPostErrors.title)}
            register={createPostRegister}
          />
          <Input
            label="Ingresá tu post"
            type="text"
            name="body"
            helperText={createPostErrors.body?.message}
            error={Boolean(createPostErrors.body)}
            register={createPostRegister}
          />

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ color: colors.grey[500] }}
          >
            Login
          </Button>
        </Box>
        <Box
          autoComplete="off"
          component="form"
          onSubmit={createPostHandleSubmit(onSubmitCreatePost)}
          maxWidth="360px"
        >
          <Input
            label="Ingresá tu usuario"
            type="text"
            name="userName"
            helperText={errors.userName?.message}
            error={Boolean(errors.userName)}
            register={register}
          />
          <Input
            label="Ingresá tu contraseña"
            type="password"
            name="password"
            helperText={errors.password?.message}
            register={register}
            error={Boolean(errors.password)}
          />

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ color: colors.grey[500] }}
          >
            Login
          </Button>
        </Box>
      </Stack> */}
    </Stack>
  );
};
export default Home;
