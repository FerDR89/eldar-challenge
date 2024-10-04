import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

//Si está autenticado puede ingresar al private

const auth = false;

const MyRouter = () => {
  return auth ? <PrivateRouter /> : <PublicRouter />;
};

export default MyRouter;
