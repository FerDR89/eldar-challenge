import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home ";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouter;
