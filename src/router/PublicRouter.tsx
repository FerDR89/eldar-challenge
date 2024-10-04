import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Singup from "../pages/singup";
import Layout from "../components/layout";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="signUp" element={<Singup />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
