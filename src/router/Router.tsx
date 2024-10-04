import { useAppSelector } from "../hooks/useAppSelector";
import { selectAuth } from "../redux/slices/auth";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const MyRouter = () => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  return isAuthenticated ? <PrivateRouter /> : <PublicRouter />;
};

export default MyRouter;
