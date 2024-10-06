import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/home ";
import Layout from "../components/layout";
import NotFound from "../pages/notFound";
import Dashboard from "../pages/dashboard";
import NotPermissions from "../pages/notPermissions";

const MyRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

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
          <Route path="/notPermissions" element={<NotPermissions />} />

          {/* Admin Authenticated Routes */}
          <Route
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
                redirectTo="/notPermissions"
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRouter;
