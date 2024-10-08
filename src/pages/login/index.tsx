import { useNavigate } from "react-router-dom";
import { Box, Button, colors, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mockedUsers } from "../../api/mockedUsers";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../redux/slices/auth";
import { createUser } from "../../redux/slices/user ";
import Input from "../../components/input";
import { IUserMock } from "../../interfaces/user ";
import { loginSchema } from "../../schema";

type TLoginForm = Pick<IUserMock, "userName" | "password">;

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TLoginForm>({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginForm> = (formData) => {
    try {
      const foundUser = mockedUsers.find(
        (u) =>
          u.userName === formData.userName && u.password === formData.password
      );

      if (!foundUser) throw new Error("usuario no encontrado");

      dispatch(login({ userName: foundUser.userName }));

      dispatch(
        createUser({
          userName: foundUser.userName,
          userId: foundUser.userId,
          role: foundUser.role,
        })
      );

      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <Stack
      direction={{ md: "row", lg: "row", xl: "row" }}
      sx={{
        height: "85vh",
        py: "20px",
        justifyContent: {
          md: "space-evenly",
          lg: "space-evenly",
          xl: "space-evenly",
        },
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h1" color={colors.grey[400]}>
        Bienvenidos
      </Typography>
      <Stack height="100%" justifyContent="center">
        <Box
          autoComplete="off"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
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
      </Stack>
    </Stack>
  );
}

export default Login;
