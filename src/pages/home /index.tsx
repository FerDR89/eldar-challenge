import { useAppDispatch } from "../../hooks/useAppDispatch";
import { logout } from "../../redux/slices/auth";

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
export default Home;
