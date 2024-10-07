import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../redux/slices/auth";
import { createUser } from "../../redux/slices/user ";
import { mockedUsers } from "../../api/db/db";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      const foundUser = mockedUsers.find(
        (u) =>
          u.userName === e.target.userName.value &&
          u.password === e.target.password.value
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
    }
  };

  return (
    <>
      <h1>TITLE</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="userName" />
        <input type="password" name="password" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Login;
