import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/home ";
import Layout from "../layout";

const MyRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />

        {/* Common Authenticated Routes */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["admin", "user"]}
              redirectTo="/home"
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRouter;
