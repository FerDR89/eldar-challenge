import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../components/layout";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
