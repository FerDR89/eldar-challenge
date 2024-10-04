import { mockedUsers } from "../../api/db";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../redux/slices/auth";

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

      dispatch(login({ userId: foundUser.userId }));

      navigate("/");
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
