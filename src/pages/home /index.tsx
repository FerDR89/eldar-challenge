import { useEffect, useState } from "react";
import { Button, Stack, Box, Typography, colors } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { saveAllPost, selectPost } from "../../redux/slices/post";
import useAppSelector from "../../hooks/useAppSelector";
import useGetAllPost from "../../hooks/useGetAllPost";
import useUpdatePost from "../../hooks/useUpdatePost";
import useCreatePost from "../../hooks/useCreatePost";
import { selectUser } from "../../redux/slices/user ";
import { CAN_EDIT_FORM } from "../../constants ";
import Input from "../../components/input";
import { TCreatePost, TUpdatePost } from "../../interfaces/post";
import { createPostSchema, updatePostSchema } from "../../schema";
import ListPost from "../../components/list ";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState<TUpdatePost | null>(null);
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPost);
  const { role: userRole } = useAppSelector(selectUser);
  const hasPermissionToEdit = CAN_EDIT_FORM.some((r) => userRole.includes(r));

  const {
    isError: isErrorGetAllPost,
    isPending: isPendingGetAllPost,
    data: allPosts,
  } = useGetAllPost();

  const { createPostAsync, isErrorCreatePost, isPendingCreatePost } =
    useCreatePost();

  const { updatePostAsync, isErrorUpdatePost, isPendingUpdatePost } =
    useUpdatePost();

  const {
    handleSubmit: createPostHandleSubmit,
    register: createPostRegister,
    reset: createPostReset,
    formState: { errors: createPostErrors },
  } = useForm<TCreatePost>({
    mode: "onSubmit",
    resolver: yupResolver(createPostSchema),
  });

  const {
    handleSubmit: updatePostHandleSubmit,
    register: updatePostRegister,
    reset: updatePostReset,
    formState: { errors: updatePostErrors },
  } = useForm<Pick<TUpdatePost, "body" | "title">>({
    mode: "onSubmit",
    resolver: yupResolver(updatePostSchema),
  });

  const onSubmitCreatePost: SubmitHandler<TCreatePost> = (formData) => {
    const { body, title } = formData;
    try {
      createPostAsync({
        title,
        body,
      });
    } catch (error) {
      console.log(error);
    } finally {
      createPostReset();
    }
  };

  const onSubmitUpdatePost: SubmitHandler<
    Pick<TUpdatePost, "body" | "title">
  > = (formData) => {
    let postUpdate = {};

    if (formData.title && formData.body) {
      postUpdate = {
        body: formData.body,
        title: formData.title,
      };
    }
    if (formData.title) {
      postUpdate = {
        title: formData.title,
      };
    }
    if (formData.body) {
      postUpdate = {
        body: formData.body,
      };
    }

    if (selectedPost?.id) {
      try {
        updatePostAsync({ id: selectedPost.id, ...postUpdate });
      } catch (error) {
        console.log(error);
      } finally {
        updatePostReset();
      }
    }
  };

  useEffect(() => {
    dispatch(saveAllPost(allPosts));
  }, [dispatch, allPosts]);

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
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: colors.grey[400],
            mb: "20px",
          }}
        >
          Últimos post
        </Typography>
      </Stack>

      {isPendingGetAllPost && (
        <Typography variant="h3" color={colors.grey[400]}>
          Cargando post...
        </Typography>
      )}

      {isErrorGetAllPost && (
        <Typography variant="h3" color={colors.grey[400]}>
          En estos momentos no podemos cargar los posts.
        </Typography>
      )}

      {posts && (
        <ListPost
          posts={posts}
          setPostChecked={setSelectedPost}
          hasPermissionToEdit={hasPermissionToEdit}
        />
      )}

      {hasPermissionToEdit && selectedPost && (
        <Stack
          direction={{ md: "row", lg: "row", xl: "row" }}
          sx={{
            py: "20px",
            justifyContent: {
              md: "space-evenly",
              lg: "space-evenly",
              xl: "space-evenly",
            },
            alignItems: "center",
            width: "100%",
          }}
        >
          {isPendingUpdatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Actualizando tu post...
            </Typography>
          )}
          {isErrorUpdatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Hubo un error al querer actualizar tu post.
            </Typography>
          )}

          {!isErrorUpdatePost && !isPendingUpdatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Actualiza tu post
            </Typography>
          )}

          <Stack height="100%">
            <Box
              autoComplete="off"
              component="form"
              onSubmit={updatePostHandleSubmit(onSubmitUpdatePost)}
              maxWidth="360px"
            >
              <Input
                label="Actualiza el título"
                type="text"
                name="title"
                helperText={updatePostErrors.title?.message}
                error={Boolean(updatePostErrors.title)}
                register={updatePostRegister}
              />
              <Input
                label="Actualiza el post"
                type="text"
                name="body"
                helperText={updatePostErrors.body?.message}
                error={Boolean(updatePostErrors.body)}
                register={updatePostRegister}
                multiline
              />
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                fullWidth
                sx={{ color: colors.grey[500] }}
              >
                Actualizar
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}

      {hasPermissionToEdit && !selectedPost && (
        <Stack
          direction={{ md: "row", lg: "row", xl: "row" }}
          sx={{
            py: "20px",
            justifyContent: {
              md: "space-evenly",
              lg: "space-evenly",
              xl: "space-evenly",
            },
            alignItems: "center",
            width: "100%",
          }}
        >
          {isPendingCreatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Creando tu post...
            </Typography>
          )}

          {isErrorCreatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Hubo un error al querer crear tu post.
            </Typography>
          )}

          {!isErrorCreatePost && !isPendingCreatePost && (
            <Typography
              variant="h4"
              color={colors.grey[400]}
              sx={{
                mb: { xs: "15px", sm: "15px" },
                alignSelf: {
                  md: "flex-start",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
            >
              Crea tu post
            </Typography>
          )}

          <Stack height="100%">
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
                multiline
              />

              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                fullWidth
                sx={{ color: colors.grey[500] }}
              >
                Crear
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
export default Home;
